import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isToday,
  getMonth,
  getYear,
  setMonth,
  parseISO,
  isBefore,
  isAfter,
  isWithinInterval,
} from "date-fns";
import "./AttendanceDashboard.css";

// ============================================================
// CONFIGURATION
// ============================================================

// Time ranges for attendance marking
const ATTENDANCE_RULES = {
  // Green: 9:00 AM to 9:20 AM (inclusive of 9:00, exclusive of 9:20)
  GREEN: {
    start: { hours: 9, minutes: 0 },
    end: { hours: 9, minutes: 20 },
    status: "Present",
    color: "#22c55e", // Green
  },
  // Amber: 9:20 AM to 12:00 PM (inclusive of 9:20, exclusive of 12:00)
  AMBER: {
    start: { hours: 9, minutes: 20 },
    end: { hours: 12, minutes: 0 },
    status: "Present",
    color: "#f59e0b", // Amber/Yellow
  },
  // Red: No connection by end of day (12:00 AM cutoff)
  RED: {
    status: "Absent",
    color: "#ef4444", // Red
  },
};

// School day cutoff (midnight)
const SCHOOL_DAY_CUTOFF = { hours: 23, minutes: 59, seconds: 59 };

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Determine attendance status based on connection timestamp
 * 
 * @param {Date|null} timestamp - When the student connected to the network
 * @returns {Object} { status, color, displayText, timestamp }
 */
const determineAttendanceStatus = (timestamp) => {
  if (!timestamp) {
    return {
      status: "Absent",
      color: ATTENDANCE_RULES.RED.color,
      displayText: "Absent",
      timestamp: null,
    };
  }

  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Create Date objects for time comparisons
  const timeValue = hours * 60 + minutes;

  // Green range: 9:00 AM (540) to 9:20 AM (560)
  const greenStart = 9 * 60 + 0; // 540
  const greenEnd = 9 * 60 + 20; // 560

  // Amber range: 9:20 AM (560) to 12:00 PM (720)
  const amberStart = 9 * 60 + 20; // 560
  const amberEnd = 12 * 60 + 0; // 720

  // Check if within school day
  const dayCutoff = 23 * 60 + 59;
  if (timeValue > dayCutoff) {
    return {
      status: "Absent",
      color: ATTENDANCE_RULES.RED.color,
      displayText: "Absent",
      timestamp: null,
    };
  }

  // Green takes priority for 9:00–9:20
  if (timeValue >= greenStart && timeValue < greenEnd) {
    return {
      status: "Present",
      color: ATTENDANCE_RULES.GREEN.color,
      displayText: `Present (${format(date, "HH:mm")})`,
      timestamp: timestamp,
    };
  }

  // Amber applies from 9:20 to 12:00
  if (timeValue >= amberStart && timeValue < amberEnd) {
    return {
      status: "Present",
      color: ATTENDANCE_RULES.AMBER.color,
      displayText: `Present (${format(date, "HH:mm")})`,
      timestamp: timestamp,
    };
  }

  // After 12:00 PM - marked as absent
  return {
    status: "Absent",
    color: ATTENDANCE_RULES.RED.color,
    displayText: "Absent",
    timestamp: null,
  };
};

/**
 * Generate an array of dates for the selected month
 */
const getMonthDates = (year, month) => {
  const start = startOfMonth(new Date(year, month));
  const end = endOfMonth(start);
  return eachDayOfInterval({ start, end });
};

/**
 * Get today's date at midnight
 */
const getToday = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function AttendanceDashboard() {
  // State
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Month selection state
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Editable cell state
  const [editingCell, setEditingCell] = useState(null);
  const [editValue, setEditValue] = useState({ status: "", timestamp: "" });

  // ============================================================
  // DATA FETCHING
  // ============================================================

  /**
   * Fetch students list from the database
   */
  const fetchStudents = useCallback(async () => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.get("/api/students");
      return response.data;
    } catch (err) {
      console.error("Error fetching students:", err);
      throw err;
    }
  }, []);

  /**
   * Fetch attendance data for the selected month
   */
  const fetchAttendance = useCallback(async (year, month) => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.get("/api/attendance", {
        params: { year, month: month + 1 },
      });
      return response.data;
    } catch (err) {
      console.error("Error fetching attendance:", err);
      throw err;
    }
  }, []);

  /**
   * Load all data
   */
  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [studentsData, attendanceData] = await Promise.all([
        fetchStudents(),
        fetchAttendance(selectedYear, selectedMonth),
      ]);

      setStudents(studentsData);

      // Format attendance data for quick lookup: { studentId_date: { status, timestamp, source } }
      const formattedAttendance = {};
      attendanceData.forEach((record) => {
        const key = `${record.studentId}_${record.date}`;
        formattedAttendance[key] = {
          status: record.status,
          timestamp: record.timestamp,
          source: record.source || "auto",
        };
      });
      setAttendanceData(formattedAttendance);
    } catch (err) {
      setError(err.message || "Failed to load data");
      console.error("Error loading data:", err);
    } finally {
      setLoading(false);
    }
  }, [selectedYear, selectedMonth, fetchStudents, fetchAttendance]);

  // Load data when month/year changes
  useEffect(() => {
    loadData();
  }, [loadData]);

  // ============================================================
  // ATTENDANCE UPDATE
  // ============================================================

  /**
   * Update attendance for a student on a specific date
   */
  const updateAttendance = async (studentId, date, status, timestamp) => {
    const key = `${studentId}_${date}`;
    const formattedDate = format(new Date(date), "yyyy-MM-dd");

    try {
      // Optimistic update
      setAttendanceData((prev) => ({
        ...prev,
        [key]: {
          status,
          timestamp: timestamp || null,
          source: "manual",
        },
      }));

      // Send to server
      // Replace with your actual API endpoint
      await axios.post("/api/attendance", {
        studentId,
        date: formattedDate,
        status,
        timestamp: timestamp || null,
        source: "manual",
      });

      // Refresh data to ensure consistency
      await loadData();
    } catch (err) {
      console.error("Error updating attendance:", err);
      alert("Failed to update attendance. Please try again.");
      // Revert optimistic update
      await loadData();
    }
  };

  // ============================================================
  // HANDLERS
  // ============================================================

  /**
   * Handle month selection change
   */
  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setSelectedMonth(newMonth);
    // Reset editing state
    setEditingCell(null);
    setEditValue({ status: "", timestamp: "" });
  };

  /**
   * Handle cell click for manual override
   */
  const handleCellClick = (studentId, date, currentStatus, currentTimestamp) => {
    setEditingCell({ studentId, date });
    setEditValue({
      status: currentStatus || "Present",
      timestamp: currentTimestamp
        ? format(new Date(currentTimestamp), "yyyy-MM-dd'T'HH:mm")
        : "",
    });
  };

  /**
   * Save manual override
   */
  const handleSaveOverride = async () => {
    if (!editingCell) return;

    const { studentId, date } = editingCell;
    const { status, timestamp } = editValue;

    const timestampValue = timestamp ? new Date(timestamp).toISOString() : null;

    await updateAttendance(studentId, date, status, timestampValue);

    setEditingCell(null);
    setEditValue({ status: "", timestamp: "" });
  };

  /**
   * Cancel manual override
   */
  const handleCancelOverride = () => {
    setEditingCell(null);
    setEditValue({ status: "", timestamp: "" });
  };

  // ============================================================
  // RENDER HELPERS
  // ============================================================

  /**
   * Get the dates to display (current month, starting from today)
   */
  const getDisplayDates = () => {
    const monthStart = startOfMonth(new Date(selectedYear, selectedMonth));
    const monthEnd = endOfMonth(monthStart);
    const allDates = eachDayOfInterval({ start: monthStart, end: monthEnd });

    // Start from today, or the first of the month if today is before month start
    const today = getToday();
    const startDate = isBefore(today, monthStart) ? monthStart : today;

    return allDates.filter((date) => isSameDay(date, startDate) || isAfter(date, startDate));
  };

  /**
   * Get attendance for a student on a specific date
   */
  const getAttendanceForDate = (studentId, date) => {
    const key = `${studentId}_${format(date, "yyyy-MM-dd")}`;
    const record = attendanceData[key];

    if (record) {
      return {
        status: record.status,
        timestamp: record.timestamp,
        source: record.source || "auto",
        color:
          record.status === "Present"
            ? record.timestamp
              ? determineAttendanceStatus(record.timestamp).color
              : ATTENDANCE_RULES.AMBER.color
            : ATTENDANCE_RULES.RED.color,
        displayText:
          record.status === "Present"
            ? record.timestamp
              ? `Present (${format(new Date(record.timestamp), "HH:mm")})`
              : "Present"
            : "Absent",
      };
    }

    // No attendance record - auto-detect based on rules
    // In a real system, you would check the network connection logs
    // For demo, we'll mark as absent
    return {
      status: "Absent",
      timestamp: null,
      source: "auto",
      color: ATTENDANCE_RULES.RED.color,
      displayText: "Absent",
    };
  };

  const displayDates = getDisplayDates();
  const months = Array.from({ length: 12 }, (_, i) =>
    format(new Date(2000, i, 1), "MMMM")
  );

  if (loading) {
    return (
      <div className="attendance-loading">
        <div className="spinner"></div>
        <p>Loading attendance data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="attendance-error">
        <p>Error: {error}</p>
        <button onClick={loadData}>Retry</button>
      </div>
    );
  }

  return (
    <div className="attendance-dashboard">
      <div className="attendance-header">
        <h2>Attendance Dashboard</h2>
        <div className="attendance-controls">
          <div className="month-selector">
            <label htmlFor="month-select">Select Month:</label>
            <select
              id="month-select"
              value={selectedMonth}
              onChange={handleMonthChange}
            >
              {months.map((month, index) => (
                <option key={index} value={index}>
                  {month} {selectedYear}
                </option>
              ))}
            </select>
          </div>
          <button
            className="refresh-btn"
            onClick={loadData}
            disabled={loading}
          >
            🔄 Refresh
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="attendance-legend">
        <div className="legend-item">
          <span className="legend-color" style={{ background: "#22c55e" }}></span>
          <span>Present (9:00 - 9:20)</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ background: "#f59e0b" }}></span>
          <span>Present (9:20 - 12:00)</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ background: "#ef4444" }}></span>
          <span>Absent</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ background: "#3b82f6", border: "2px dashed #3b82f6" }}></span>
          <span>Manual Override</span>
        </div>
        <div className="legend-hint">
          <span>💡 Click any cell to manually override attendance</span>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="attendance-table-wrapper">
        <table className="attendance-table">
          <thead>
            <tr>
              <th className="student-name-header">Student Name</th>
              {displayDates.map((date) => (
                <th
                  key={date.toISOString()}
                  className={`date-header ${isToday(date) ? "today" : ""}`}
                >
                  <div className="date-header-content">
                    <span className="date-day">{format(date, "d")}</span>
                    <span className="date-month">{format(date, "MMM")}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="student-name-cell">{student.name}</td>
                {displayDates.map((date) => {
                  const attendance = getAttendanceForDate(student.id, date);
                  const isEditing =
                    editingCell &&
                    editingCell.studentId === student.id &&
                    isSameDay(new Date(editingCell.date), date);

                  return (
                    <td
                      key={date.toISOString()}
                      className="attendance-cell"
                      style={{
                        backgroundColor: attendance.color,
                        cursor: "pointer",
                        opacity: attendance.source === "manual" ? 0.85 : 1,
                        border: attendance.source === "manual" ? "2px dashed #3b82f6" : "none",
                      }}
                      onClick={() =>
                        handleCellClick(
                          student.id,
                          date,
                          attendance.status,
                          attendance.timestamp
                        )
                      }
                    >
                      {isEditing ? (
                        <div className="edit-cell">
                          <select
                            value={editValue.status}
                            onChange={(e) =>
                              setEditValue({ ...editValue, status: e.target.value })
                            }
                          >
                            <option value="Present">Present</option>
                            <option value="Absent">Absent</option>
                          </select>
                          <input
                            type="datetime-local"
                            value={editValue.timestamp}
                            onChange={(e) =>
                              setEditValue({ ...editValue, timestamp: e.target.value })
                            }
                          />
                          <div className="edit-actions">
                            <button onClick={handleSaveOverride}>✅ Save</button>
                            <button onClick={handleCancelOverride}>❌ Cancel</button>
                          </div>
                        </div>
                      ) : (
                        <div className="cell-content">
                          <span className="cell-status">{attendance.displayText}</span>
                          {attendance.source === "manual" && (
                            <span className="cell-badge">✏️</span>
                          )}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile summary view */}
      <div className="attendance-mobile-summary">
        <p>
          <strong>Total Students:</strong> {students.length}
        </p>
        <p>
          <strong>Month:</strong> {months[selectedMonth]} {selectedYear}
        </p>
        <p className="mobile-hint">Tap any cell to edit attendance</p>
      </div>
    </div>
  );
}
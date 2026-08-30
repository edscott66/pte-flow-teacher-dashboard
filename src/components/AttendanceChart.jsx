import React, { useState, useEffect, useCallback } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isToday,
  isBefore,
  isAfter,
  getMonth,
  getYear,
  getDay,
  isFuture,
} from "date-fns";
import "./AttendanceChart.css";

// ============================================================
// CONFIGURATION
// ============================================================

const ATTENDANCE_RULES = {
  GREEN: {
    start: { hours: 9, minutes: 0 },
    end: { hours: 9, minutes: 20 },
    status: "Present",
    color: "#22c55e",
  },
  AMBER: {
    start: { hours: 9, minutes: 20 },
    end: { hours: 12, minutes: 0 },
    status: "Present",
    color: "#f59e0b",
  },
  RED: {
    status: "Absent",
    color: "#ef4444",
  },
};

// ============================================================
// PUBLIC HOLIDAYS & BREAKS
// ============================================================

const HOLIDAYS = {
  "2026-08-25": { name: "Public Holiday", type: "public" },
  "2026-08-31": { name: "Public Holiday", type: "public" },
  "2026-09-01": { name: "Teacher Break", type: "teacher" },
  "2026-09-16": { name: "Public Holiday", type: "public" },
  "2026-10-02": { name: "Student Break", type: "student" },
  "2026-10-05": { name: "Teacher Break", type: "teacher" },
  "2026-11-09": { name: "Public Holiday", type: "public" },
  "2026-11-30": { name: "Student Break", type: "student" },
  "2026-12-28": { name: "Teacher Break", type: "teacher" },
  "2026-12-29": { name: "Teacher Break", type: "teacher" },
  "2026-12-30": { name: "Teacher Break", type: "teacher" },
  "2026-12-31": { name: "Teacher Break", type: "teacher" },
};

const isHoliday = (date) => {
  const dateStr = format(date, "yyyy-MM-dd");
  return HOLIDAYS[dateStr] || null;
};

const isWeekend = (date) => {
  const day = getDay(date);
  return day === 0 || day === 6;
};

const shouldSkipDay = (date) => {
  return isWeekend(date) || isHoliday(date) !== null;
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

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
  const timeValue = hours * 60 + minutes;

  const greenStart = 9 * 60 + 0;
  const greenEnd = 9 * 60 + 20;
  const amberStart = 9 * 60 + 20;
  const amberEnd = 12 * 60 + 0;

  if (timeValue >= greenStart && timeValue < greenEnd) {
    return {
      status: "Present",
      color: ATTENDANCE_RULES.GREEN.color,
      displayText: `Present (${format(date, "HH:mm")})`,
      timestamp: timestamp,
    };
  }

  if (timeValue >= amberStart && timeValue < amberEnd) {
    return {
      status: "Present",
      color: ATTENDANCE_RULES.AMBER.color,
      displayText: `Present (${format(date, "HH:mm")})`,
      timestamp: timestamp,
    };
  }

  return {
    status: "Absent",
    color: ATTENDANCE_RULES.RED.color,
    displayText: "Absent",
    timestamp: null,
  };
};

const getToday = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

// Check if a date is in the past (including today)
const isPastOrToday = (date) => {
  const today = getToday();
  return isSameDay(date, today) || isBefore(date, today);
};

// Check if a date is a future date (tomorrow or later)
const isFutureDate = (date) => {
  const today = getToday();
  return isAfter(date, today);
};

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function AttendanceChart({ students }) {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [attendanceData, setAttendanceData] = useState({});
  const [editingCell, setEditingCell] = useState(null);
  const [editValue, setEditValue] = useState({ status: "", timestamp: "" });
  const [loading, setLoading] = useState(false);

  // Simulate attendance data (in production, this would come from your API)
  useEffect(() => {
    const mockData = {};
    students.forEach((student) => {
      const dates = getMonthDates(selectedYear, selectedMonth);
      dates.forEach((date) => {
        if (shouldSkipDay(date)) return;
        if (isAfter(date, new Date())) return;
        
        const key = `${student.id}_${format(date, "yyyy-MM-dd")}`;
        const rand = Math.random();
        if (rand < 0.3) {
          const timestamp = new Date(date);
          timestamp.setHours(9, 5 + Math.floor(Math.random() * 10));
          mockData[key] = {
            status: "Present",
            timestamp: timestamp.toISOString(),
            source: "auto",
          };
        } else if (rand < 0.6) {
          const timestamp = new Date(date);
          timestamp.setHours(10, 15 + Math.floor(Math.random() * 60));
          mockData[key] = {
            status: "Present",
            timestamp: timestamp.toISOString(),
            source: "auto",
          };
        } else {
          mockData[key] = {
            status: "Absent",
            timestamp: null,
            source: "auto",
          };
        }
      });
    });
    setAttendanceData(mockData);
  }, [students, selectedYear, selectedMonth]);

  const getMonthDates = (year, month) => {
    const start = startOfMonth(new Date(year, month));
    const end = endOfMonth(start);
    return eachDayOfInterval({ start, end });
  };

  const getDisplayDates = () => {
    const monthStart = startOfMonth(new Date(selectedYear, selectedMonth));
    const monthEnd = endOfMonth(monthStart);
    const allDates = eachDayOfInterval({ start: monthStart, end: monthEnd });
    const today = getToday();
    const startDate = isBefore(today, monthStart) ? monthStart : today;
    
    return allDates.filter((date) => {
      if (isBefore(date, today) && !isSameDay(date, today)) return false;
      if (isWeekend(date)) return false;
      if (isHoliday(date) !== null) return false;
      return true;
    });
  };

  const getAttendanceForDate = (studentId, date) => {
    const key = `${studentId}_${format(date, "yyyy-MM-dd")}`;
    const record = attendanceData[key];

    // ✅ NEW: For future dates, return an empty state with lock
    if (isFutureDate(date)) {
      return {
        status: "Future",
        color: "#ffffff",
        displayText: "",
        timestamp: null,
        source: "auto",
        isFuture: true,
      };
    }

    if (record && record.timestamp) {
      const status = determineAttendanceStatus(record.timestamp);
      return {
        ...status,
        source: record.source || "auto",
        isFuture: false,
      };
    }

    if (record && record.status === "Absent") {
      return {
        status: "Absent",
        color: ATTENDANCE_RULES.RED.color,
        displayText: "Absent",
        timestamp: null,
        source: record.source || "auto",
        isFuture: false,
      };
    }

    return {
      status: "Absent",
      color: ATTENDANCE_RULES.RED.color,
      displayText: "Absent",
      timestamp: null,
      source: "auto",
      isFuture: false,
    };
  };

  // ============================================================
  // CELL EDIT HANDLERS
  // ============================================================

  const handleCellClick = (studentId, date, currentStatus, currentTimestamp) => {
    // ✅ Only allow editing if the date is today or in the past
    if (!isPastOrToday(date)) {
      alert("This cell will unlock at midnight on the day.");
      return;
    }

    setEditingCell({ studentId, date });
    setEditValue({
      status: currentStatus || "Present",
      timestamp: currentTimestamp
        ? format(new Date(currentTimestamp), "yyyy-MM-dd'T'HH:mm")
        : format(new Date(), "yyyy-MM-dd'T'HH:mm"),
    });
  };

  const handleSaveOverride = () => {
    if (!editingCell) return;

    const { studentId, date } = editingCell;
    const { status, timestamp } = editValue;
    const key = `${studentId}_${format(date, "yyyy-MM-dd")}`;

    setAttendanceData((prev) => ({
      ...prev,
      [key]: {
        status,
        timestamp: timestamp ? new Date(timestamp).toISOString() : null,
        source: "manual",
      },
    }));

    setEditingCell(null);
    setEditValue({ status: "", timestamp: "" });
  };

  const handleCancelOverride = () => {
    setEditingCell(null);
    setEditValue({ status: "", timestamp: "" });
  };

  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setSelectedMonth(newMonth);
    setEditingCell(null);
    setEditValue({ status: "", timestamp: "" });
  };

  const displayDates = getDisplayDates();
  const months = Array.from({ length: 12 }, (_, i) =>
    format(new Date(2000, i, 1), "MMMM")
  );

  const getHolidayInfo = (date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return HOLIDAYS[dateStr] || null;
  };

  const isCellEditable = (date) => {
    return isPastOrToday(date);
  };

  if (students.length === 0) {
    return (
      <div className="attendance-empty">
        <p>No students to display attendance for.</p>
        <p className="attendance-hint">Add students to see attendance tracking.</p>
      </div>
    );
  }

  return (
    <div className="attendance-chart">
      {/* Month Selector */}
      <div className="attendance-controls">
        <div className="month-selector">
          <label htmlFor="attendance-month">Select Month:</label>
          <select
            id="attendance-month"
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
        <div className="legend-item">
          <span className="legend-color" style={{ background: "#1a1a1a" }}></span>
          <span>Weekend / Holiday / Break</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ background: "#ffffff", border: "1px solid #d1d5db" }}></span>
          <span>Future Date (Unlocks at midnight)</span>
        </div>
        <div className="legend-hint">
          <span>💡 Click any cell to manually override (today or past dates only)</span>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="attendance-table-wrapper">
        <table className="attendance-table">
          <thead>
            <tr>
              <th className="student-name-header">Student Name</th>
              {displayDates.map((date) => {
                const holidayInfo = getHolidayInfo(date);
                return (
                  <th
                    key={date.toISOString()}
                    className={`date-header ${isToday(date) ? "today" : ""} ${holidayInfo ? "holiday-header" : ""}`}
                  >
                    <div className="date-header-content">
                      <span className="date-day-name">{format(date, "EEE")}</span>
                      <span className="date-day">{format(date, "d")}</span>
                      <span className="date-month">{format(date, "MMM")}</span>
                      {holidayInfo && (
                        <span className="date-holiday-label">{holidayInfo.name}</span>
                      )}
                    </div>
                  </th>
                );
              })}
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
                  
                  const editable = isCellEditable(date);
                  const isFuture = attendance.isFuture;

                  return (
                    <td
                      key={date.toISOString()}
                      className={`attendance-cell ${!editable ? "non-editable" : ""} ${isFuture ? "future-cell" : ""}`}
                      style={{
                        backgroundColor: isFuture ? "#ffffff" : attendance.color,
                        cursor: editable ? "pointer" : "default",
                        opacity: attendance.source === "manual" ? 0.85 : 1,
                        border: attendance.source === "manual" ? "2px dashed #3b82f6" : (isFuture ? "1px solid #d1d5db" : "none"),
                        color: isFuture ? "#9ca3af" : "white",
                      }}
                      onClick={() => {
                        if (editable && !isFuture) {
                          handleCellClick(
                            student.id,
                            date,
                            attendance.status,
                            attendance.timestamp
                          );
                        }
                      }}
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
                          {isFuture ? (
                            <>
                              <span className="cell-status">🔒</span>
                              <span className="cell-future-label">unlocks at midnight</span>
                            </>
                          ) : (
                            <>
                              <span className="cell-status">{attendance.displayText}</span>
                              {attendance.source === "manual" && (
                                <span className="cell-badge">✏️</span>
                              )}
                              {!editable && !isFuture && (
                                <span className="cell-badge">🔒</span>
                              )}
                            </>
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

      <div className="attendance-footer">
        <span className="attendance-count">
          {students.length} students • {displayDates.length} days
        </span>
        <span className="attendance-updated">
          Data updates automatically when students connect to the network
        </span>
      </div>
    </div>
  );
}
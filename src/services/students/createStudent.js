import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { teacherDb } from "../../teacherFirebase";

export const createStudentRecord = async (data) => {
  try {
    const {
      name,
      passportNumber,
      consultant,
      className,
      phone,
      email,
    } = data;

    const studentId = passportNumber || `student_${Date.now()}`;

    const courseCycleRef = doc(teacherDb, "courseCycles", className);
    const courseCycleSnap = await getDoc(courseCycleRef);

    let courseFinishDate;

    if (courseCycleSnap.exists()) {
      courseFinishDate = courseCycleSnap.data().courseFinishDate;
    } else {
      const d = new Date();
      d.setMonth(d.getMonth() + 2);
      courseFinishDate = d.toLocaleDateString("en-GB");
    }

    const now = new Date();
    const courseId = `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}`;

    const courseStartDate = now.toLocaleDateString("en-GB");

    await setDoc(doc(db, "students", studentId), {
      name,
      passportNumber: passportNumber || null,
      consultant: consultant || null,
      className: className || null,
      phone: phone || null,
      email: email || null,

      // ⭐ Automatic joined date (human readable)
      joined: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }),

      // Server timestamp for backend sorting
      createdAt: serverTimestamp(),

      lastLogin: null,
      status: "active",
      activationCode: null,
      lessonsCompleted: 0,
      practiceTests: 0,
      averageScore: null,
      activity: [],

      currentCourse: {
        courseId,
        startDate: courseStartDate,
        endDate: courseFinishDate,
        lessonsCompleted: 0,
        practiceTests: 0,
        averageScore: null,
        activity: []
      }
    });

    return { success: true, studentId };
  } catch (error) {
    console.error("Error creating student:", error);
    return { success: false, error };
  }
};
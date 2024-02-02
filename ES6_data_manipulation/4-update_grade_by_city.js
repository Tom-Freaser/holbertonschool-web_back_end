/* eslint-disable linebreak-style */
const updateStudentGradeByCity = (listOfStudents, city, newGrades) => {
  const students = listOfStudents.filter((s) => s.location === city);

  for (const s of students) {
    const obj = newGrades.find((g) => g.studentId === s.id);
    if (typeof obj === 'undefined') {
      s.grade = 'N/A';
    } else {
      s.grade = obj.grade;
    }
  }

  return students.map((s) => s);
};

export default updateStudentGradeByCity;

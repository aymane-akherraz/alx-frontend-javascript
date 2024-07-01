export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList.filter((e) => e.location === city).map((e) => {
    const grade = newGrades.filter((el) => el.studentId === e.id);
    if (grade.length !== 0) {
      e.grade = grade[0].grade;
    } else {
      e.grade = 'N/A';
    }
    return e;
  });
}

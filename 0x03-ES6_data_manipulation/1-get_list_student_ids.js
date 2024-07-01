export default function getListStudentIds(studentsList) {
  if (studentsList instanceof Array) {
    return studentsList.map((e) => e.id);
  }
  return [];
}

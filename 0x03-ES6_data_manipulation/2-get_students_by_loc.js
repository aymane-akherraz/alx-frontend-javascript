export default function getStudentsByLocation(studentsList, city) {
  return studentsList.filter((e) => e.location === city);
}

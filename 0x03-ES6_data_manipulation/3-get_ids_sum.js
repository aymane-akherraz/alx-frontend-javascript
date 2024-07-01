export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((acc, current) => acc + current.id, 0);
}

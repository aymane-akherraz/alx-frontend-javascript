export default function createIteratorObject(report) {
  const myArray = [];
  for (const emp of Object.values(report.allEmployees)) {
    myArray.push(...emp);
  }
  return myArray;
}

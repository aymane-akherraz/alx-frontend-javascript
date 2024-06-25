export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  const len = reportWithIterator.length;

  reportWithIterator.forEach((emp, i) => {
    str += `${emp}${i < len - 1 ? ' | ' : ''}`;
  });

  return str;
}

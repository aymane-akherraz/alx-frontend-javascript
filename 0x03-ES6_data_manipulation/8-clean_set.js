export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  return [...set].filter((e) => typeof e === 'string' && e.startsWith(startString)).map((e) => e.slice(startString.length)).join('-');
}

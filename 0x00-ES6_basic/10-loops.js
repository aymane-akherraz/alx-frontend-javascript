export default function appendToEachArrayValue(array, appendString) {
  for (const [index, val] of array.entries()) {
    // eslint-disable-next-line no-param-reassign
    array[index] = appendString + val;
  }

  return array;
}

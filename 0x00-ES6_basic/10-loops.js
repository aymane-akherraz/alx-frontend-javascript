export default function appendToEachArrayValue(array, appendString) {
  const myArray = array;
  for (const [index, val] of myArray.entries()) {
    myArray[index] = appendString + val;
  }

  return myArray;
}

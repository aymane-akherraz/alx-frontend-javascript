export default function hasValuesFromArray(set, array) {
  let bool = true;
  array.forEach((e) => {
    if (!set.has(e)) {
      bool = false;
    }
  });
  return bool;
}

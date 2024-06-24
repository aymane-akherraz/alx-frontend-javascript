export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  function f(trueOrFalse) {
    if (trueOrFalse) {
      var task = true;
      var task2 = false;
    }
  }
  f(trueOrFalse);

  return [task, task2];
}

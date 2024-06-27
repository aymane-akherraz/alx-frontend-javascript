/* eslint-disable no-underscore-dangle */

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse.checkName(name);
    this._length = HolbertonCourse.checkLength(length);
    this._students = HolbertonCourse.checkStudents(students);
  }

  static checkName(name) {
    if (typeof name === 'string') {
      return name;
    }
    throw TypeError('Name must be a string');
  }

  static checkLength(length) {
    if (typeof length === 'number') {
      return length;
    }
    throw TypeError('Length must be a number');
  }

  static checkStudents(students) {
    if (students instanceof Array) {
      students.forEach((el) => {
        if (typeof el !== 'string') {
          throw TypeError('Students must be an array of strings');
        }
      });
      return students;
    }
    throw TypeError('Students must be an array of strings');
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = HolbertonCourse.checkName(name);
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = HolbertonCourse.checkLength(length);
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = HolbertonCourse.checkStudents(students);
  }
}

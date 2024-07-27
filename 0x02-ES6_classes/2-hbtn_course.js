export default class HolbertonCourse {
  constructor(name, length, students) {
      this._name = name;
      this._length = length;
      this._students = students;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(name) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') throw TypeError('Name must be a number');
    this._length = length;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    if (students.some((element) => typeof element !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  this._students = students;
  }
}

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter
  get code() {
    return this._code;
  }

  get name() {
    return this._code;
  }

  // Setters
  set code(code) {
    if (typeof code !== 'string') throw new TypeError('Code must be a string');
    this._code = code;
  }

  set name(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    this._name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

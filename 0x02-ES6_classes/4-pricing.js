import Currency from './3-currency';

export default class Pricing {
    constructor(amount, currency) {
      this.amount = amount;
      this.currency = currency;
    }
  
    // Getter
    get amount() {
      return this._amount;
    }
  
    get currency() {
      return this._currency;
    }
  
    // Setters
    set amount(amount) {
      if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
      this._code = code;
    }
  
    set currency(currency) {
      if (typeof currency !== 'currency') throw new TypeError('Currency must be a currency');
      this._currency = currency;
    }
  
    displayFullPrice() {
      return `${this.name} (${this.code})`;
    }
  }
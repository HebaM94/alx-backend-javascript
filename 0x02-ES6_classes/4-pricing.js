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
      if (!(currency instanceof Currency)) throw new TypeError('Currency must be a currency');
      this._currency = currency;
    }
  
    // Functions
    displayFullPrice() {
      return `${this.amount} ${this.currency.name} (${this.currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
        throw new TypeError('Amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
        throw new TypeError('Conversion must be a number');
    }
    return amount * conversionRate;
    }
}

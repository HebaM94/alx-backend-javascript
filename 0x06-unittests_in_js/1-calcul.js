function calculateNumber(type, a, b) {
  const numOne = Math.round(a);
  const numTwo = Math.round(b);
  switch (type) {
    case 'SUM':
      return numOne + numTwo;
    case 'SUBTRACT':
      return numOne - numTwo;
    case 'DIVIDE':
      if (!numTwo) return 'Error';
      return numOne / numTwo;
    default:
      throw new Error('Operation not supported. Type must be SUM, SUBTRACT or DIVIDE');
  }
}

module.exports = calculateNumber;

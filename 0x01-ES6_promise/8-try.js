export default function divideFunction(numerator, denominator) {
  if (!denominator || denominator === 0) throw new Error('cannot divide by 0');
  return numerator / denominator;
}

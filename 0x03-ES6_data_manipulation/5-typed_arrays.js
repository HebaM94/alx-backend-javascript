export default function createInt8TypedArray(length, position, value) {
  const dataView = new DataView(new ArrayBuffer(length));
  try {
    dataView.setInt8(position, value);
  } catch (error) {
    throw new Error('Position outside range');
  }
  return dataView;
}

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line no-unused-vars
    const task = true; // the value inside the block is isolated so no interferring
    // eslint-disable-next-line no-unused-vars
    const task2 = false;
  }

  return [task, task2];
}

export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;

    if (trueOrFalse) {
    const task = true; //the value inside the block is isolated so no interferring
    const task2 = false;
    }

    return [task, task2];
}

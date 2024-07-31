export default function cleanSet(set, startString) {
  const string = [];
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
      string.push(element.slice(startString.length));
    }
  });
  if (typeof startString !== 'string' || startString === '') return '';
  return string.join('-');
}

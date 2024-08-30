function longestCommonPrefix(strs: string[]): string {
  return strs.reduce((prefix: string | null, element) => {
    if(prefix === null) return element;
    return findPrefix(prefix, element);
  }, null) ?? '';
};

function findPrefix(first: string, second: string): string {
  if (first === second) return first;
  var i = 0;
  while (first[i] === second[i]) i++;
  return first.slice(0, i);
}
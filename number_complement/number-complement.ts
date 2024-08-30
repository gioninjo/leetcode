function findComplement(num: number): number {
  let power = 33;
  let headFound = false;
  let complement = 0;
  let sqr = Math.pow(2, power);
  while (power > -1) {
    sqr = sqr / 2;
    if (Math.floor(num / sqr)) {
      num = num - sqr;
      if (!headFound) {
        headFound = true;
      }
    } else if (headFound) {
      complement = complement + sqr;
    }
    power--;
  }
  return complement;
};
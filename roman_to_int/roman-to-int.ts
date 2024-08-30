function romanToInt(s: string): number {
  let numArr: number[] = []
  for (const c of s) {
    switch (c) {
      case ('I'):
        numArr.push(1);
        break;
      case ('V'):
        numArr.push(5);
        break;
      case ('X'):
        numArr.push(10);
        break;
      case ('L'):
        numArr.push(50);
        break;
      case ('C'):
        numArr.push(100);
        break;
      case ('D'):
        numArr.push(500);
        break;
      case ('M'):
        numArr.push(1000);
        break;
    }
  }
  return sumRomans(numArr);
};

function sumRomans(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) { // sia lodato il typescript che gestisce gli index out of bounds
      sum += -arr[i] + arr[++i];
    } else {
      sum = sum + arr[i];
    }
  }
  return sum;
}
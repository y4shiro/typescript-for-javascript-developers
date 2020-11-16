export {};

enum Months {
  Janualy = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.Janualy);
console.log(Months.February);
console.log(Months.December);

// const MonthsJs = {
//   January: 0,
//   February: 1,
// };
// console.log(MonthsJs.January);
// console.log(MonthsJs.February);

enum COLORS {
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  RED = '#FF0000',
  GREEN = '#008000',
  // YELLOW = '#0000FF',
  BLUE = '#0000FF',
}

let green = COLORS.GREEN;
console.log({ green });

// 後から要素を足すことも出来る
enum COLORS {
  YELLOW = '#0000FF',
  GRAY = '#808080',
}

COLORS.YELLOW;

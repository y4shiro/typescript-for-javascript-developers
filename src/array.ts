export {};

let numbers: number[] = [1, 2, 3];

// 下記の書き方もあるが非推奨
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

// 演習
let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

// 二次元配列
let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300],
];

// 配列内の型がバラバラ
// 共用型 Union type
let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
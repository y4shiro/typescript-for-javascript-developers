export {};

let name = 'Taro';

name = 'Ham'; // 再代入が出来る

let nickname = 'Ham' as const;
// nickname = 'Hamtaro'; // 再代入できない

let profile = {
  name: 'Taro',
  height: 178,
} as const;

// profile.name = 'Ham';
// profile.height = 180;

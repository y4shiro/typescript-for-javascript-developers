export {};

let name: any = 'Ham';

// let length = name.length as number;
// let length = (name as string).length;
let length = (<string>name).length; // 推奨されていない

length = 'foo';

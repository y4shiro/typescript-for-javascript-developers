export {};

function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  if (typeof value === 'number') value * 2;
  return value + value;
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));

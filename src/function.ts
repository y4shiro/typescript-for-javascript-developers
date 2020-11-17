export {};

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.78, 86.0));
console.log(bmi(1.71, 65.0));

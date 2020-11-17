export {};

let bmi = function (height: number, weight: number): number {
  return weight / (height * height);
};

console.log(bmi(1.78, 86));
console.log(bmi(1.71, 65));

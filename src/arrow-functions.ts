export {};

let bmi: (height: number, weight: number) => number = (height, weight) =>
  weight / (height * height);

console.log(bmi(1.78, 86));

const factorial = (n: number): number | string => {
  if (typeof n === "number" && n > 0) {
    var result = 1;
    while (n >= 1) {
      result *= n;
      n -= 2;
    }
    return result;
  } else return "Ошибка! Вы ввели не число или отрицательное число!";
};
console.log(factorial(4));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial("ghj"));
console.log(factorial("5"));
console.log(factorial(-3));

const getNumbers = (...array: (string | number)[]): number[] =>
  array.filter((item) => typeof item === "number") as number[];

console.log(getNumbers(1, "dfdfg", 34, "2", -1, 0));

const calculate = ([...arr]: [number, number, string]): number | undefined => {
  switch (arr[2]) {
    case "+":
      arr[0] + arr[1];
    case "-":
      return arr[0] - arr[1];
    case "*":
      return arr[0] * arr[1];
    case "/":
      return arr[0] / arr[1];
  }
};

console.log(calculate([2, 4, "+"]));
console.log(calculate([3, 4, "-"]));
console.log(calculate([5, 3, "*"]));
console.log(calculate([20, 3, "/"]));
console.log(calculate([3, 4, "dfg"]));

const numbers: number[] = [3, 45, 23, 34, 45];
const double = (num: number): number => num * 2;
const squere = (num: number): number => num * num;
const applyOperation = (
  arr: number[],
  operation: (num: number) => number
): number[] => arr.map(operation);
console.log(applyOperation(numbers, double));
console.log(applyOperation(numbers, squere));

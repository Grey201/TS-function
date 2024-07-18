var factorial = function (n) {
    if (typeof n === "number" && n > 0) {
        var result = 1;
        while (n >= 1) {
            result *= n;
            n -= 2;
        }
        return result;
    }
    else
        return "Ошибка! Вы ввели не число или отрицательное число!";
};
console.log(factorial(4));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial("ghj"));
console.log(factorial("5"));
console.log(factorial(-3));
var getNumbers = function () {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    return array.filter(function (item) { return typeof item === "number"; });
};
console.log(getNumbers(1, "dfdfg", 34, "2", -1, 0));
var calculate = function (_a) {
    var arr = _a.slice(0);
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

var numbers = [3, 45, 23, 34, 45];
var double = function (num) { return num * 2; };
var squere = function (num) { return num * num; };
var applyOperation = function (arr, operation) { return arr.map(operation); };
console.log(applyOperation(numbers, double));
console.log(applyOperation(numbers, squere));

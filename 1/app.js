const calculator = require("./calculator");

let x = 10, y = 5;

let sum = calculator.add(x, y);
calculator.printResult(sum);

let diff = calculator.subtract(x, y);
calculator.printResult(diff);

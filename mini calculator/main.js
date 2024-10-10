import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: "Enter the first number",
    },
    { type: "number",
        name: "numberTwo",
        message: "Enter the second number",
    },
    { type: "list",
        name: "operator",
        message: "Choose an operator",
        choices: ["+", "-", "*", "/"],
    }
]);
let { numberOne, numberTwo, operator } = answer;
let result = 0;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("invalid operator");
}
console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);

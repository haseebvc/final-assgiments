import inquirer  from "inquirer";
import  Chalk   from "chalk";

let answer : {
    numberOne : number,
    numberTwo : number,
    operator : string,
} = await inquirer.prompt([
    { type : "number",
    name : "numberOne",
        message : "Enter the first number",
    },
    { type : "number",
       name : "numberTwo",
        message : "Enter the second number",
    },
    { type : "list",
    name : "operator",
        message : "Choose an operator",
        choices : ["+", "-", "*", "/"],
    } 
])
let {  numberOne,   numberTwo,   operator} = answer;
let result :number = 0
switch (operator) {
    case "+":
         result =   numberOne  +  numberTwo;
    break;
    case "-": 
    result =   numberOne  -   numberTwo;
    break;
    case "*":
         result =   numberOne   *   numberTwo;
    break;
    case "/":
         result =   numberOne   /   numberTwo;
    break;
    default :
     console.log ("invalid operator")
    
}
console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`)
import inquirer from "inquirer"
let answer = await inquirer.prompt ([{ 
    name : "age",
    type : "number",
    message: "enter your age: "
    
}] )
console.log ("insha allah,in " + (60 - answer.age )+ " years you will be 60 year old ." )
function greet(name) {
    return "walcome home, ".concat(name);
}
console.log(greet(" haseeb"));
console.log(greet(" ali"));
console.log(greet(" mohsin"));
console.log(greet(" ahmed"));
console.log(greet("asiya"));
function TableGenerate(num) {
    if (num === void 0) { num = 6; }
    console.log(num + " * 1 = " + num * 1);
    console.log(num + " * 2 = " + num * 2);
    console.log(num + " * 3 = " + num * 3);
    console.log(num + " * 4 = " + num * 4);
    console.log(num + " * 5 = " + num * 5);
    console.log(num + " * 6 = " + num * 6);
    console.log(num + " * 7 = " + num * 7);
    console.log(num + " * 8 = " + num * 8);
    console.log(num + " * 9 = " + num * 9);
    console.log(num + " * 10 = " + num * 10);
}
TableGenerate(2);
console.log("");
TableGenerate(3);
console.log("");
TableGenerate(4);
console.log("");
TableGenerate(5);
console.log("");
TableGenerate(7);
console.log("");
TableGenerate();

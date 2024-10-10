var lowercase = "HASEEB VC WALA ";
var pagal = lowercase.toLowerCase();
console.log(pagal);
var uppercase = "haseeb vc wala".toUpperCase();
console.log(uppercase);
var cutting = " what is your name ?".slice(0, 45);
console.log(cutting);
var work = "hy my name is haseeb vc wala";
var split = work.split(" ");
console.log(split);
var word = " ";
for (var i = 0; i < split.length; i++) {
    word += split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase() + " ";
}
console.log(word);

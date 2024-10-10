"use strict";
let book = true;
let item = 5;
const allow = 3;
if (book && item < allow) {
    console.log("you can take a book");
}
else {
    console.log("you cant take a book !");
}
let couped = false;
let amount = 1900;
let active = true;
if (couped || (amount > 2500 && active)) {
    console.log('apko discount mil gaya hai');
}
else {
    console.log("apko discount nai mil saktha !!!");
}
let cake = true;
let items = 7;
let falaver = "chocolate";
if (cake && (item < 6 && falaver)) {
    console.log("your order is ready in 10 mint");
}
else {
    console.log("your order is ready in  30 mints");
}

// data types
// number string boolean any
// void null undefined never 
// bigInt symbol unknown 

// number
let age : number = 22
console.log(age);

// string
let owner : string = "haseeb vc wala"
console.log(owner);

// boolean
let isOwner : boolean = true
console.log(isOwner);

// any
let gender : any 
 gender = 55
 gender = "male"
 gender = true
 gender = ["male", "female", "other"]
 console.log(gender);
 
// void
let heyWorld : void = undefined
console.log(heyWorld);

// null
let nullValue : null = null
console.log(nullValue);

// undefined
let undefinedValue : undefined = undefined
console.log(undefinedValue);

// bigInt
let finance : BigInt = 5000n
console.log(finance);

// symbol
let check   = Symbol ("haseeb")
let check2   = Symbol("ali")
console.log (check === check2)
// unknown
let who : unknown 
who = "haseeb"
who = 22
who = true
who = [1,2,3,4,5,6,7,8,9,]
who = ["ali","mohsin", "ahmed","haseeb"] 
console.log(who);

let lowercase : string = "HASEEB VC WALA "
let pagal : string = lowercase.toLowerCase()
console.log(pagal)
let uppercase : string = "haseeb vc wala".toUpperCase()
console.log (uppercase)
let cutting :string = " what is your name ?".slice(0,45)
console.log (cutting)
let work :string = "hy my name is haseeb vc wala"

let split :string []=work .split(" ") 
console.log (split)
let word :string= " "
for (let i = 0; i < split.length; i++) {
    word += split[i].charAt(0).toUpperCase()+split[i].slice(1).toLowerCase()+ " "
    
}
console.log (word)
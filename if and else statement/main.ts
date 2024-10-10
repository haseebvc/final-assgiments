let englishMark :number = 86
let mathMark :number = 70
let scienceMark : number = 67
let phycisMark : number = 87
let sindiMark : number = 67
let urduMark : number = 87
let islamiat : number = 76
let obtainedMark : number = englishMark + mathMark + scienceMark + phycisMark + sindiMark +urduMark +islamiat
let totalMarks :number = 700
let percentage : number = (obtainedMark / totalMarks) * 100
console.log ("MARKS sheet")
console.log ("english mark ", englishMark)
console.log ("math mark ", mathMark)
console.log ("science mark ", scienceMark)
console.log ("phycis mark ", phycisMark)
console.log ("sindi mark ", sindiMark)
console.log ("urdu mark ", urduMark)
console.log ("islamiat mark ", islamiat)
console.log("TOTAL MARKS", totalMarks);
console.log("OBTAINED MARKS",obtainedMark )
console.log("PERCENTAGE", percentage.toFixed(2)+ " %");
if (percentage > 95) {
    console.log("Grade: A+")
    
} else if (percentage > 90) {
    console.log ("GRADE : A ")
}else if  (percentage > 80) {
    console.log ("GRADE : B ")
} else if (percentage > 70) {
    console.log ("GRADE : C ")
} else if (percentage > 60) {
    console.log ("GRADE : C ")
} else if (percentage > 50) {
    console.log ("GRADE : D ")
}else if (percentage > 40) {
    console.log ("GRADE : D ")
}
else {
    console.log (" your are failed !!! ")
} 
 
   

    
    

    

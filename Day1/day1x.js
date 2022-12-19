let totalsArray = [];
let count = 0;

let fs = require('fs');
let text = fs.readFileSync('./Day1/input.txt', 'utf8').split(/\r?\n/).map((line) =>  {
    return (parseInt(line) > 0)? count += parseInt(line) : totalsArray.push(count) && (count = 0); 
 });
 
totalsArray.sort((a, b) => b - a);
console.log(totalsArray[0]);
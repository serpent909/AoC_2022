//read the input text file and convert into an array by line
let fs = require('fs');
let text = fs.readFileSync('./Day1/input.txt', 'utf8');
let textByLineArray = text.split(/\r?\n/);

//map the array to convert the strings into numbers
const caloriesArray = textByLineArray.map((line) =>  {
    if(parseInt(line) > 0) {
        return parseInt(line);
    } else {
        return 0;
    }
})

let totalsArray = [];
let total = 0;

//loop through the array and add the numbers together until a zero is encountered, push each total to a new array
for(let i = 0; i < caloriesArray.length; i++) {
    if(caloriesArray[i] > 0) {
        total += caloriesArray[i];
    } else {
        totalsArray.push(total);
        total = 0;
    }
}

totalsArray.sort((a, b) => b - a);

console.log(totalsArray[0]+totalsArray[1]+totalsArray[2]);
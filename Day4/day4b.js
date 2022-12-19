let fs = require('fs');
let textLines = fs.readFileSync('./Day4/input.txt', 'utf8').split(/\r?\n/);

let numbersArray = textLines.map(line => {
    line = line.replaceAll('-', ',').split(',')
    return line
}).map(line => {
    let numbers = line.map(item => {
        return parseInt(item)
    })
    return numbers
});

count = 0;

for (let i = 0; i < numbersArray.length; i++) {

    let p1low = numbersArray[i][0]
    let p1high = numbersArray[i][1]
    let p2low = numbersArray[i][2]
    let p2high = numbersArray[i][3]

    if (p2high >= p1low && p2low <= p1high) {
        count = count + 1;
    }

}

console.log(count)
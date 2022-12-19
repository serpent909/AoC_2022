let fs = require('fs');
let textLines = fs.readFileSync('./Day3/input.txt', 'utf8').split(/\r?\n/);

let totalPriority = 0;

let findCommonCharacter = (line1, line2, line3) => {
    const intersection = line1.filter(x => line2.includes(x) && line3.includes(x))[0];
    return intersection;

}

let calcculatePriority = (character) => {
    if (character.charCodeAt(0) > 96) {
        return character.charCodeAt(0) - 96;
    } else {
        return character.charCodeAt(0) - 38;
    }
}

for (let i = 0; i < textLines.length; i+=3) {
    let line1 = textLines[i].split('');
    let line2 = textLines[i + 1].split('');
    let line3 = textLines[i + 2].split('');
    totalPriority = totalPriority + calcculatePriority(findCommonCharacter(line1, line2, line3));   
}

console.log(totalPriority);
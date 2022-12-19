let fs = require('fs');
let textLines = fs.readFileSync('./Day3/input.txt', 'utf8').split(/\r?\n/);

let totalPriority = 0;

let findCommonCharacter = (line) => {
   let line1 = line.split('').slice(0, line.length/2);
   let line2 = line.split('').slice(line.length/2, line.length);
   const intersection = line1.filter(x => line2.includes(x))[0];
   return intersection;

}

let calcculatePriority = (character) => {
    if(character.charCodeAt(0) > 96) {
        return character.charCodeAt(0) - 96;
    } else {
        return character.charCodeAt(0) - 38;
    }
}

textLines.forEach(line => {
    totalPriority = totalPriority + calcculatePriority(findCommonCharacter(line));

})

console.log(totalPriority);
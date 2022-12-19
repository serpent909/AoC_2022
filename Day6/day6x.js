let fs = require('fs');
let characterArray = fs.readFileSync('./Day6/input.txt', 'utf8')
let uniqueString = [];
i = 0;

let findFirstUnique = (characterArray, length) => {
    for (char in characterArray) {

        uniqueString.push(characterArray[char]);
        i++;

        if (uniqueString.length > length) {
            uniqueString.shift();
        }
        if (uniqueString.length == length && new Set(uniqueString).size == length) {
            break;
        }
    }
}

findFirstUnique(characterArray, 14)
console.log(uniqueString)
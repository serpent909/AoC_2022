let fs = require('fs');
let characterArray = fs.readFileSync('./Day6/input.txt', 'utf8').split('')

for(let i = 0; i < characterArray.length; i++) {

    pos1 = characterArray[i]
    pos2 = characterArray[i+1]
    pos3 = characterArray[i+2]
    pos4 = characterArray[i+3]

    let checkArr = [pos1, pos2, pos3, pos4]
    let unique = [...new Set(checkArr)]

    if(unique.length == 4) {
        console.log(i+4)
        break;
    }
}
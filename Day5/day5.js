let fs = require('fs');
let text = fs.readFileSync('./Day5/input.txt', 'utf8').split('\r\n\r\n');

let firstPart = text[0];
let secondPart = text[1];
let cratesInput = firstPart.split('\n');
let instructionsInput = secondPart.split('\n');
cratesInput.pop();

let cratesArray = [[], [], [], [], [], [], [], [], []]
let instructionsArr = []
let finalArray = []
let columns = 0;

let createStacksArray = (cratesInput) => {
    cratesInput.forEach(line => {
        line = line.split('');
        columns = 0;
        for (let i = 1; i < line.length; i += 4) {
            if (line[i] != ' ') {
                cratesArray[columns].push(line[i]);
            }
            columns++
        }
    });
}

let createInstructionsArray = (instructionsInput) => {
    instructionsInput.forEach(instruction => {
        const regex = /[0-9]+/g;
        instructionsArr.push(instruction.match(regex));
    });
}

let rearrangeCrates = (cratesArray, instructionsArray) => {
    for (let i = 0; i < instructionsArray.length; i++) {
        
        let numCratesToMove = instructionsArray[i][0];
        let source = instructionsArray[i][1] - 1;
        let destination = instructionsArray[i][2] - 1;

        let blocksRemaining = cratesArray[source].splice(numCratesToMove, cratesArray[source].length);
        let blocksRemoved = cratesArray[source].splice(0,numCratesToMove);

        cratesArray[source] = blocksRemaining;
        cratesArray[destination] = (blocksRemoved).reverse().concat((cratesArray[destination]))
    }
    return cratesArray
}

let extractTop = (cratesArray) => {
    cratesArray.forEach(crate => {
        finalArray.push(crate[0])
    });
}

createStacksArray(cratesInput)
createInstructionsArray(instructionsInput)
rearrangeCrates(cratesArray, instructionsArr)
extractTop(cratesArray)

console.log(finalArray)



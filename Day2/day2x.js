const { Console } = require('console');
let fs = require('fs');
let gamesArray = fs.readFileSync('./Day2/input.txt', 'utf8').split(/\r?\n/).map(line => line.replace(' ', ''));

const scores = {
    AX: 4,
    AY: 8,
    AZ: 3,
    BX: 1,
    BY: 5,
    BZ: 9,
    CX: 7,
    CY: 2,
    CZ: 6

}

const scores2 = {
    AX: 3,
    AY: 4,
    AZ: 8,
    BX: 1,
    BY: 5,
    BZ: 9,
    CX: 2,
    CY: 6,
    CZ: 7

}

const calculateRoundScore = (scores) => {
    let total = 0;
    gamesArray.forEach(game => total += scores2[game]);
    return total;
}

console.log(calculateRoundScore(scores));
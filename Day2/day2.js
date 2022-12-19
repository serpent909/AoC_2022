let fs = require('fs');
let gamesArray = fs.readFileSync('./Day2/input.txt', 'utf8').split(/\r?\n/).map(line => line.split(' '));

let score = 0;

calculateRoundScore = (game) => {
    let roundScore = 0;
    if(game[1] === 'X') {
        roundScore += 1;
    } 
    if (game[1] === 'Y') {
        roundScore += 2;
    }
    if (game[1] === 'Z') {
        roundScore += 3;
    }
    if (game[1] === 'X' && game[0] === 'A' || game[1] === 'Y' && game[0] === 'B' || game[1] === 'Z' && game[0] === 'C') {
        roundScore += 3;
    }
    if(game[1] === 'X' && game[0] === 'C'|| game[1] === 'Y' && game[0] === 'A' || game[1] === 'Z' && game[0] === 'B') {
        roundScore += 6;
    }

    return roundScore;
}

for(let i = 0; i < gamesArray.length; i++) {
    score = score + calculateRoundScore(gamesArray[i]);
}

console.log(score);
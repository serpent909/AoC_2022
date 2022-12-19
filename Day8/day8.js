let fs = require('fs');
let lines = fs.readFileSync('./Day8/input.txt', 'utf8')
lines = lines.split(/\r\n/);
linesMatrix = lines.map(line => line.split(''));



const checkFromStart = (linesMatrixRow, line) => {
    let visibleFromLeft = true;
    for (let j = 0; j < line; j++) {
        if (linesMatrixRow[j] >= linesMatrixRow[line]) {
            visibleFromLeft = false;
            return visibleFromLeft;
        }
    }
    return visibleFromLeft;
}

const checkFromEnd = (linesMatrixRow, line) => {
    let visibleFromRight = true;
    for (let j = linesMatrixRow.length - 1; j > line; j--) {
        if (linesMatrixRow[j] >= linesMatrixRow[line]) {
            visibleFromRight = false;
            return visibleFromRight;
        }
    }
    return visibleFromRight;
}

const traverseLines = (linesMatrix) => {
    let visibleTrees = 0;
    visibleTrees+= 2*linesMatrix.length + 2* linesMatrix[0].length -4

    for (let i = 1; i < linesMatrix.length - 1; i++) {
        for (let j = 1; j < linesMatrix[0].length - 1; j++) {

            if (checkFromStart(linesMatrix[i], j)) {
                visibleTrees++;
                continue;
            } else if (checkFromEnd(linesMatrix[i], j)) {
                visibleTrees++;
                continue;
            }

            let matrixColumn = linesMatrix.map(ele => ele[j])
           
            if (checkFromStart(matrixColumn, i)) {
                visibleTrees++;
                continue;

            }else if (checkFromEnd(matrixColumn, i)) {
                visibleTrees++;
            }
        }
    }
    console.log(visibleTrees)
}


traverseLines(linesMatrix)

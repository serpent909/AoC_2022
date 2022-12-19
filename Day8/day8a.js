let fs = require('fs');
let lines = fs.readFileSync('./Day8/input.txt', 'utf8')
lines = lines.split(/\r\n/);
linesMatrix = lines.map(line => line.split(''));



const checkFromStart = (linesMatrixRow, line) => {
    let visible = 0;
    for (let j = line - 1; j >= 0; j--) {
        if (linesMatrixRow[j] >= linesMatrixRow[line]) {
            visible++;
            return visible;
        }
        visible++;
    }
    return visible;
}

const checkFromEnd = (linesMatrixRow, line) => {
    let visible = 0;
    for (let j = line + 1; j <= linesMatrixRow.length - 1; j++) {
        if (linesMatrixRow[j] >= linesMatrixRow[line]) {
            visible++
            return visible;
        }
        visible++;
    }
    return visible;
}

const traverseLines = (linesMatrix) => {

    let maxCalc = 0;

    for (let i = 1; i < linesMatrix.length - 1; i++) {
        for (let j = 1; j < linesMatrix[0].length - 1; j++) {
            let lineCalc = 0;

            let matrixColumn = linesMatrix.map(ele => ele[j])

            lineCalc = checkFromStart(linesMatrix[i], j) * (checkFromEnd(linesMatrix[i], j)) * checkFromStart(matrixColumn, i) * (checkFromEnd(matrixColumn, i))

            if (lineCalc > maxCalc) {
                maxCalc = lineCalc;
            }
        }
    }
    console.log(maxCalc)
}

traverseLines(linesMatrix)
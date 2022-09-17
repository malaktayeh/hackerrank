'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let kangarooOneLoc = x1;
    let kangarooTwoLoc = x2;
    
    // check if kangaroo no 1 can catch up
    if (v1 <= v2) return 'NO';
    
    while (x1 < x2) {
        console.log(kangarooOneLoc + ' ' + kangarooTwoLoc)        
        // break if kangarooOneLoc is greater than kangarooTwoLoc
        if (kangarooOneLoc > kangarooTwoLoc) {
            // break out of while loop and log no
            return 'NO'
        }
        // check if jump makes both kangaroos land on same pos
        else if (kangarooOneLoc === kangarooTwoLoc) {
            // break out of while loop and log yes
            return 'YES'
        }
        else {
            kangarooOneLoc = kangarooOneLoc + v1;
            kangarooTwoLoc = kangarooTwoLoc + v2;
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(firstMultipleInput[0], 10);

    const v1 = parseInt(firstMultipleInput[1], 10);

    const x2 = parseInt(firstMultipleInput[2], 10);

    const v2 = parseInt(firstMultipleInput[3], 10);

    const result = kangaroo(x1, v1, x2, v2);

    ws.write(result + '\n');

    ws.end();
}

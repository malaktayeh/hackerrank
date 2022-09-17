'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    const caseA = ['a', 'e', 'i', 'o', 'u'];
    const caseB = ['b', 'c', 'd', 'e', 'f', 'g'];
    const caseC = ['h', 'j', 'k', 'l', 'm'];
    switch(true) {
        case (caseA.includes(s[0])):
            letter = 'A';
            break; 
        case (caseB.includes(s[0])):
            letter = 'B';
            break; 
        case (caseC.includes(s[0])):
            letter = 'C';
            break; 
        default:
            letter = 'D';
            break;
    }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
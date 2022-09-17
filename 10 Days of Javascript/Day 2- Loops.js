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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let noVowelString = '';
    for (let i = 0, len = s.length; i<len; i++) {
        let currentLetter = s[i].toLowerCase();
        if (currentLetter === 'a' || currentLetter === 'e' || currentLetter === 'i' || currentLetter === 'o' || currentLetter === 'u') console.log(currentLetter)
        else noVowelString = noVowelString + currentLetter;
    }
    console.log(noVowelString.split('').join('\n'))
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
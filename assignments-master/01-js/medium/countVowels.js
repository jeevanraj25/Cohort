/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const x = str.toLowerCase();
    let cnt=0;
    for(let i=0;i<x.length;i++){
        if(x[i] == 'a' || x[i] == 'e' || x[i] =='i' || x[i]=='o' || x[i]=='u') cnt++;
    }

    return cnt;
}

module.exports = countVowels;
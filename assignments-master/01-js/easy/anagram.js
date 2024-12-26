/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove all spaces and convert strings to lowercase
  let x = str1.replace(/\s+/g, '').toLowerCase();
  let y = str2.replace(/\s+/g, '').toLowerCase();

  // If lengths are not the same, they cannot be anagrams
  if (x.length !== y.length) return false;

  // Sort the characters in both strings
  let s1 = x.split('').sort().join('');
  let s2 = y.split('').sort().join('');

  // Compare the sorted strings
  return s1 === s2;
}



module.exports = isAnagram;

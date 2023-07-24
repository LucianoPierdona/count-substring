/*
Given string str of the lowercase alphabet and an integer K, the task is to count all substrings of length K which have exactly K distinct characters.

Example:
Input: str = “abcc”, K = 2
Output: 2
Explanation:
Possible substrings of length K = 2 are
ab : 2 distinct characters
bc : 2 distinct characters
cc : 1 distinct character
Only two valid substrings exist {“ab”, “bc”}.
Input: str = “aabab”, K = 3
Output: 0
Explanation:
Possible substrings of length K = 3 are
aab : 2 distinct characters
aba
*/

function countSubstring(str, K) {
  let counter = 0;

  str = str.split("");

  for (let i = 0; i < str.length; i++) {
    const letters = str.slice(i, i + K);

    if (letters.length < K) {
      break;
    }

    let isAllDifferent = true;

    const dict = {};

    letters.map((w) => {
      if (dict[w]) {
        dict[w]++;
      } else {
        dict[w] = 1;
      }
    });

    Object.keys(dict).map((k) => {
      if (dict[k] > 1) isAllDifferent = false;
    });

    if (isAllDifferent) {
      counter++;
    }
  }

  return counter;
}

module.exports = countSubstring;

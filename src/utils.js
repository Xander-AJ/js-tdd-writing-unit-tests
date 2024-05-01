// Your code here

// src/utils.js
export function pointsForWord(word) {
    if (typeof word !== 'string') {
      return 0; // Return 0 if the input is not a string
    }
  
    let points = 0;
    for (const char of word) {
      if (/[a-zA-Z]/.test(char)) {
        if (["a", "e", "i", "o", "u"].includes(char.toLowerCase())) {
          points += 1;
        } else {
          points += 2;
        }
      }
      // Ignore non-alphabetic characters
    }
    return points;
  }
  
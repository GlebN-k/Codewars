// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  
    let counter = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'] 
    Array.from(str).forEach(item => {
       if (vowels.includes(item)) {++counter}
     })
    return counter
  }
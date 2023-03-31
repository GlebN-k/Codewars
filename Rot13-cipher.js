// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
    let result = "";
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        // Upper case letters
        charCode = ((charCode - 65 + 13) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        // Lower case letters
        charCode = ((charCode - 97 + 13) % 26) + 97;
      }
      result += String.fromCharCode(charCode);
    }
    return result;
  }
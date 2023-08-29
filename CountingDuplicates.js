// const duplicateCount = text => {
//    let copyText = text.toLowerCase()
//     let obj = {}
//     let result = 0
//
//     for (let i = 0; i < text.length; i++) {
//         if (copyText[i] in obj) {
//             obj[copyText[i]]++
//         } else {
//             obj[copyText[i]] = 0
//         }
//     }
//
//     Object.values(obj).forEach(el => el > 0 ? result++ : undefined)
//
//     return result
// }

const duplicateCount = text => {
    const copyText = text.toLowerCase();
    const charCount = {};

    for (const char of copyText) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return Object.values(charCount).filter(count => count > 1).length;
};



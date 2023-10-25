function incrementString(str) {
    let index = str.length - 1;
    while (index >= 0 && !isNaN(parseInt(str.charAt(index)))) {
        index--;
    }

    if (index === str.length - 1) {
        return str + '1';
    }

    const base = str.slice(0, index + 1);
    const numStr = str.slice(index + 1);
    const number = parseInt(numStr);

    const incrementedNumber = (number + 1).toString();
    const leadingZeros = Math.max(0, numStr.length - incrementedNumber.length); 
    const newNumber = '0'.repeat(leadingZeros) + incrementedNumber;

    return base + newNumber;
}
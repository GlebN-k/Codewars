const permutations = string => {
    let result = [];

    const generatePermutations = (current, remaining) => {
        if (remaining.length === 0) {
            result.push(current);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                const newCurrent = current + remaining[i];
                const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
                generatePermutations(newCurrent, newRemaining);
            }
        }
    };

    generatePermutations('', string);

    return [...new Set(result)]
};
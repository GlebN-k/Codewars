const gimme = function (arr) {
    return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};

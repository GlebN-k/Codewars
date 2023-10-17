function points(games) {
    let totalPoints = 0;

    for (const match of games) {
        const [x, y] = match.split(':').map(Number);

        if (x > y) {
            totalPoints += 3; // Win
        } else if (x === y) {
            totalPoints += 1; // Tie
        }

    }

    return totalPoints;
}
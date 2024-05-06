function score(game: [number, number][]): number {
    let totalScore = 0;
    let frameIndex = 0;

    const isStrike = (roll: [number, number]) => roll[0] === 10;
    const isSpare = (roll: [number, number]) => roll[0] + (roll[1] || 0) === 10 && roll[0] < 10;

    for (let frame = 0; frame < 10; frame++) {
        // Check if the frame index is within the bounds of the game data
        if (frameIndex >= game.length) {
            break; // End of the game
        }

        const [firstRoll, secondRoll] = game[frameIndex];

        if (isStrike([firstRoll, secondRoll])) {
            totalScore += 10 + (game[frameIndex + 1] ? game[frameIndex + 1][0] + (isStrike(game[frameIndex + 1]) ? (game[frameIndex + 2] ? game[frameIndex + 2][0] : 0) : (game[frameIndex + 1][1] || 0)) : 0);
            frameIndex++;
        } else if (isSpare([firstRoll, secondRoll])) {
            totalScore += 10 + (secondRoll || 0);
            frameIndex += 2;
        } else if (firstRoll >= 0 && secondRoll >= 0) {
            totalScore += firstRoll + secondRoll;
            frameIndex++;
        } else {
            return -1; // Invalid roll
        }
    }

    return totalScore;
}

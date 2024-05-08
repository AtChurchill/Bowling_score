export function score(game: [number, number][]): number {
  let totalScore = 0;
  let frameIndex = 0;

  const isStrike = (roll: [number, number]) => roll[0] === 10;
  const isSpare = (roll: [number, number]) =>
    roll[0] + (roll[1] || 0) === 10 && roll[0] < 10;

  for (let frame = 0; frame < 10; frame++) {
    // Check if the frame index is within the bounds of the game data
    if (frameIndex >= game.length) {
      break; // End of the game
    }

    const [firstRoll, secondRoll] = game[frameIndex];
  }

  // Added to compile the code
  return -99;
}

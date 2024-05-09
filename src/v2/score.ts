import { Game } from '../types/bowling.type';

export function score(game: Game): number {
  if (game.length > 10) {
    return -1; // Return -1 if there are more than 10 frames
  }

  let score = 0;
  for (let i = 0; i < game.length; i++) {
    const [firstRoll, secondRoll] = game[i];
    score += firstRoll + secondRoll;
    if (firstRoll === 10) {
      if (i < game.length - 1) {
        score += game[i + 1][0] + game[i + 1][1];
        if (game[i + 1][0] === 10 && i < game.length - 2) {
          score += game[i + 2][0];
        }
      }
    } else if (firstRoll + secondRoll === 10 && i < game.length - 1) {
      score += game[i + 1][0];
    }
  }
  return score;
}

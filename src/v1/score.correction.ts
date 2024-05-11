import { Game } from '../types/bowling.type';

export function score(game: Game) {
  let totalScore = 0;
  // let frameIndex = 0; // no need to declare another index, we can use 'frame' instead

  if (!isValidGame(game)) return -1;

  for (let frame = 0; frame < 10; frame++) {
    if (isStrike(frame)) {
      totalScore += 10 + strikeBonus(frame);
      // no need to increment the for loop index
      // frame++;
    } else if (isSpare(frame)) {
      totalScore += 10 + spareBonus(frame);
      // no need to increment the for loop index
      // the logic was also wrong, it should be frame += 1
      // as each game entry contains the 2 rolls of a frame so we need to increment by 1
      // frame += 2;
    } else {
      totalScore += sumOfPinsInFrame(frame);
      // no need to increment the for loop index
      // the logic was also wrong, it should be frame += 1
      // as each game entry contains the 2 rolls of a frame so we need to increment by 1
      // frameIndex += 2;
    }
  }

  return totalScore;

  // It's usually cleaner to move functions outside of the main function
  // This way, the main function is easier to read and the functions can be reused elsewhere
  function isStrike(i: number) {
    // Added a condition to check if the frame exists ('?.')
    // if `game[i]` is undefined, `game[i]?.[0]` will return 'undefined' and the comparison will return false
    return game[i]?.[0] === 10;
  }

  function isSpare(i: number) {
    // Added a condition to check if the frame exists ('?.')
    // if `game[i]` is undefined, `game[i]?.[0]` will return 'undefined' and the comparison will return false
    return game[i]?.[0] + game[i][1] === 10;
  }

  function sumOfPinsInFrame(i: number) {
    return (game[i]?.[0] ?? 0) + (game[i]?.[1] ?? 0) + (game[i]?.[2] ?? 0);
  }

  function strikeBonus(i: number) {
    // Below is the same as
    /*
    let result = 0;
    if (isStrike(i + 1)) {
      result = game[i + 1][0] + (game[i + 2]?.[0] ?? 0);
    } else {
      result = game[i + 1][0] + game[i + 1][1];
    }
    return result;
    */
    return i === 9
      ? game[i][1] + (game[i]?.[2] ?? 0)
      : isStrike(i + 1)
        ? i + 1 === 9
          ? game[i + 1][0] + game[i + 1][1]
          : game[i + 1][0] + game[i + 2][0]
        : (game[i + 1]?.[0] ?? 0) + (game[i + 1]?.[1] ?? 0);
  }

  // Created this
  function spareBonus(i: number) {
    // Added a condition to check if the next frame exists
    return i === 9 ? game[i]?.[2] ?? 0 : game[i + 1]?.[0] ?? 0;
  }

  // Added this to handle error test games
  function isValidGame(game: Game): boolean {
    return (
      game?.length === 10 &&
      game.every(
        (frame, i) =>
          // all frames should have 2 rolls, except the last frame which can have 3
          (frame.length === 2 || (i === 9 && frame.length === 3)) &&
          // all rolls should be between 0 and 10
          frame.every((roll) => roll >= 0 && roll <= 10) &&
          // the sum of the rolls in all frames but the last one should be less than or equal to 10
          // last frame can go up to 30 (3 strikes in a row)
          frame.reduce((acc, n) => acc + n, 0) <= (i < 9 ? 10 : 30),
      )
    );
  }
}

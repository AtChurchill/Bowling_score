export function score(game) {
  let totalScore = 0;
  let frameIndex = 0;

  for (let frame = 0; frame < 10; frame++) {
      if (isStrike(frameIndex)) {
          totalScore += 10 + strikeBonus();
          frameIndex++;
      } else if (isSpare(frameIndex)) {
          totalScore += 10 + spareBonus();
          frameIndex += 2;
      } else {
          totalScore += sumOfPinsInFrame(frameIndex);
          frameIndex += 2;
      }
  }

  return totalScore;

  function isStrike(frameIndex) {
      return game[frameIndex][0] === 10;
  }

  function isSpare(frameIndex) {
      return game[frameIndex][0] + game[frameIndex][1] === 10;
  }

  function sumOfPinsInFrame(frameIndex) {
      return game[frameIndex][0] + game[frameIndex][1];
  }

  function strikeBonus() {
      return game[frameIndex + 1][0] + game[frameIndex + 1][1];
  }
}
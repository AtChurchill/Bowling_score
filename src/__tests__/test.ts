import implementations from '../index';
import { TestData } from './test.types';
import { data } from './testGame.data';

const result = { pass: 0, fail: 0 };
const version = process.argv[2];

function test([name, obj]: [string, TestData]): void {
  const calculatedScore = implementations[version](obj.scores);
  const status = calculatedScore === obj.expectedScore ? 'pass' : 'fail';
  result[status]++;

  console.log(
    `${status === 'pass' ? '✅' : '❌'} ${name}: calculated score is ${calculatedScore} and expected score is ${
      obj.expectedScore
    } => ${status.toUpperCase()}`,
  );
}

function main() {
  if (!version || typeof implementations[version] !== 'function') {
    console.error(`Invalid version number provided: ${version}`);
    process.exit(1);
  }
  const specificGame = process.argv[3];

  console.log(
    `⏱️ Running ${version} ${specificGame ? `for ${specificGame}` : 'for all games'}`,
  );

  if (specificGame) {
    test([specificGame, data[specificGame]]);
  } else {
    Object.entries(data).forEach(test);
  }
}

main();

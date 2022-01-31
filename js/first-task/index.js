const readline = require('readline');
const process = require('process');

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  rl.on('line', (inputData) => {
    input = inputData.split(' ').map(Number);
  });

  process.stdin.on('end', () => {
    console.log(getIsHypothesisRight(input));
    process.exit(0);
  });
}

const YES = 'YES';
const NO = 'NO';

// предпологаем, что данные введены корректно
function getIsHypothesisRight([a, b, n]) {
  if (n === 0) {
    return NO;
  }
  const mysticNumbersSumm = (a - b) / 2;
  if (mysticNumbersSumm < 1 || !Number.isInteger(mysticNumbersSumm) || mysticNumbersSumm < n) {
    return NO;
  }

  return YES;
}

main();

module.exports = getIsHypothesisRight;

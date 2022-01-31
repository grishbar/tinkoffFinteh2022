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
    console.log(getPaintBucketsAmount(input));
    process.exit(0);
  });
}

// предпологаем, что данные введены корректно
function getPaintBucketsAmount([n, m]) {
  let bigSide = Math.max(n, m);
  let smallSide = Math.min(n, m);
  let result = Math.trunc(bigSide / smallSide);

  while (bigSide % smallSide !== 0) {
    const currentSquareWidth = Math.trunc(bigSide / smallSide) * smallSide;
    bigSide -= currentSquareWidth;

    const tempSide = smallSide;
    smallSide = bigSide;
    bigSide = tempSide;

    result += Math.trunc(bigSide / smallSide);
  }

  return result;
}

main();

module.exports = getPaintBucketsAmount;

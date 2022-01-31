const readline = require('readline');
const process = require('process');

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input = [];
  rl.on('line', (inputData) => {
    input.push(inputData);
  });

  process.stdin.on('end', () => {
    const realInput = input.map((item) => item.split(' ').map(Number));
    console.log(getMinimumJumpsAmount(realInput));
    process.exit(0);
  });
}

// предпологаем, что данные введены корректно
function getMinimumJumpsAmount([mountainHeight, possibleJumps, possibleSlides]) {

}

main();

module.exports = getMinimumJumpsAmount;

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
    const realInput = input[1].split(' ').map(Number);
    console.log(getMinStartNumber(realInput));
    process.exit(0);
  });
}

// предпологаем, что данные введены корректно
function getMinStartNumber(quantity) {
  let result = 0;
  quantity.sort((a, b) => b - a);
  for (let i = 0; i < quantity.length; i += 1) {
    result = Math.ceil(Math.sqrt(quantity[i] + result));
  }

  return result;
}

main();

module.exports = getMinStartNumber;

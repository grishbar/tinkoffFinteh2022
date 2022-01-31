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
    const realInput = input[0].split(' ').map(Number);
    console.log(getPossibleWays(realInput));
    process.exit(0);
  });
}

// предпологаем, что данные введены корректно
function getPossibleWays([n, m]) {
  const diagonalsMap = generateDiagonals();

  const currentDiagonal = diagonalsMap[n + m];

  if (!currentDiagonal) {
    return 0;
  }

  const offset = Math.floor(Math.abs(n - m) / 2);

  return currentDiagonal[Math.ceil(currentDiagonal.length / 2) - 1 + offset] || 0;
}

/**
 * Cоздает мапу диагоналей на которые модет встать конь и массив с возможным количеством вариантов
 * дойти в кажду точку этой диагонали
 */
function generateDiagonals() {
  const diagonalsMap = {
    2: [1],
    5: [1, 1],
    8: [1, 2, 1],
    11: [1, 3, 3, 1],
  };
  for (let i = 5; i <= 50; i += 3) {
    const prevArr = diagonalsMap[i - 3];
    const newArr = [];
    for (let j = 0; j < diagonalsMap[i - 3].length - 1; j += 1) {
      newArr.push(prevArr[j] + prevArr[j + 1]);
    }
    diagonalsMap[i] = [1, ...newArr, 1];
  }

  return diagonalsMap;
}

main();

module.exports = getPossibleWays;

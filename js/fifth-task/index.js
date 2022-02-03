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
 
function getMinimumJumpsAmount([mountainHeight, possibleJumps, possibleSlides]) {
  const visited = {};
 
  function findMinWaysFromIndex(start) {
    let minJumps = Number.MAX_SAFE_INTEGER;
 
    for (let jumpLen = possibleJumps[start]; jumpLen >= 0; jumpLen--) {
      const jumpTo = start - jumpLen;
      if (jumpTo < 0) {
        return 1;
      }

      const slideTo = jumpTo + possibleSlides[jumpTo];
      if (!(slideTo in visited)) {
        visited[slideTo] = Number.MAX_SAFE_INTEGER;
        const way = findMinWaysFromIndex(slideTo);
        visited[slideTo] = way;
      }
 
      minJumps = Math.min(minJumps, visited[slideTo])
    }
 
    return minJumps + 1;
  }
 
  const ways = findMinWaysFromIndex(mountainHeight - 1);
 
  return ways < Number.MAX_SAFE_INTEGER ? ways : - 1;
}
 
main();
 
module.exports = getMinimumJumpsAmount;
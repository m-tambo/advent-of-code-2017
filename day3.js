// http://adventofcode.com/2017/day/3

// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...

// While this is very space-efficient (no squares are skipped),
// requested data must be carried back to square 1 by programs that can
// only move up, down, left, or right. They always take the shortest path:
// the Manhattan Distance between the location of the data and square 1.

const spiralDistance = (number) => {
  // set up a cartesian grid where 1 is (0, 0)
  // for example, 13 is (2, 2) and 17 is (-2, 2)
  let x = 0
  let y = 0
  let mainCounter = 1
  let xPlusCounter = 0
  let xMinusCounter = 0
  let yPlusCounter = 0
  let yMinusCounter = 0

  for (let i = 1; i < number; i++) {
    if (yPlusCounter == mainCounter || yMinusCounter == mainCounter) {
      mainCounter += 1;
      continue;
    }
    if (mainCounter % 2 != 0 && xPlusCounter < mainCounter) {
      x += 1;
      xPlusCounter += 1;

      yPlusCounter = 0
      continue;
    } else
    if (mainCounter % 2 != 0 && yPlusCounter < mainCounter) {
      y += 1;
      yPlusCounter += 1;

      xMinusCounter = 0;
      continue;
    } else
    if (mainCounter % 2 == 0 && xMinusCounter < mainCounter) {
      x -= 1;
      xMinusCounter += 1;

      yMinusCounter = 0;
      continue;
    } else
    if (mainCounter % 2 == 0 && yMinusCounter < mainCounter) {
      y -= 1;
      yMinusCounter += 1;

      xPlusCounter = 0;
      continue;
    }
  }
  let distance = Math.abs(x) + Math.abs(y)
  return distance
}

// tests
// console.log(spiralDistance(1), 'should equal 0')
// console.log(spiralDistance(12), 'should equal 3')
// console.log(spiralDistance(23), 'should equal 2')
// console.log(spiralDistance(1024), 'should equal 31')

// answer:
console.log(spiralDistance(265149))

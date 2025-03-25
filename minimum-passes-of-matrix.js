function minimumPassesOfMatrix(matrix) {
  // Write your code here.
  /*

  loop through matrix and add to stack every positive number
  separately add to set all the positions of the negative nums

  pop from stack positive integers into activestack
  check neighbors
    if neighbor is negative, remove that from negativeset, convert to positive number and add to mainstack

  continue process until activestack is empty

  check if any negatives left in stack
	  if true return -1
	  else
	  return count

  T O(r*c)
  S O(r*c)

  */

  let mainStack = [];
  let activeStack = [];

  let negativePositions = new Set();

  let count = -1;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let val = matrix[i][j];
      if (val > 0) {
        mainStack.push([i, j]);
      } else if (val < 0) {
        negativePositions.add(String(i)+String(j));
      }
    }
  }

  //no negatives in matrix
  if (negativePositions.size === 0) return 0;

  while (mainStack.length) {
    activeStack.push(...mainStack);
    mainStack = [];
    count++;
    while (activeStack.length) {
      let positivePosition = activeStack.pop();

      checkNeighbors(positivePosition, matrix, mainStack, negativePositions);
    }
  }

  if (negativePositions.size > 0) return -1;

  return count;

}

function checkNeighbors(positivePosition, matrix, mainStack, negativePositions) {
  let row = positivePosition[0];
  let col = positivePosition[1];
  //top
  if (row - 1 >= 0 && matrix[row - 1][col] < 0) {
    matrix[row-1][col] *= -1;
    mainStack.push([row - 1,col]);
    negativePositions.delete(String(row - 1)+String(col));
  }
  //right
  if (col + 1 < matrix[row].length && matrix[row][col + 1] < 0) {
    matrix[row][col + 1] *= -1;
    mainStack.push([row, col + 1]);
    negativePositions.delete(String(row)+String(col + 1));
  }

  //bottom
  if (row + 1 < matrix.length && matrix[row + 1][col] < 0) {
    matrix[row + 1][col] *= -1;
    mainStack.push([row + 1, col]);
    negativePositions.delete(String(row + 1)+String(col));
  }

  //left
  if (col - 1 < matrix[row].length && matrix[row][col - 1] < 0) {
    matrix[row][col - 1] *= -1;
    mainStack.push([row, col - 1]);
    negativePositions.delete(String(row)+String(col - 1));
  }
}
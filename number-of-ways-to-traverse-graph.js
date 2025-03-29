function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.
  /*
  create matrix of size width and height, filled with 0s
  at 1 1, should be 1 since theres only 1 way to get there
  first row and col all 1s

  then each box is the sum of the top and left boxes

  T O(w*h)
  S O(w*h)

  return value at last box bottom right


  */

  let matrix = [];

  for (let r = 0; r < height; r++) {
    let row = [];
    for (let c = 0; c < width; c++) {
      if (r === 0 || c === 0) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    matrix.push(row);
  }


  for (let r = 1; r < height; r++) {
    for (let c = 1; c < width; c++) {
      matrix[r][c] = matrix[r - 1][c] + matrix[r][c - 1];
    }
  }

  return matrix[height-1][width-1];
}

// Do not edit the line below.
exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;

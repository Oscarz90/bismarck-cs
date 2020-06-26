/* eslint-disable no-param-reassign */
/**
 * Given a matrix NxN, it rotates the matrix 90 grades
 * - Time complexity: O(n^2)
 * @param {Array.<Array.<number>>} matrix - The matrix to rotate
 * @returns {Array.<Array.<number>>} The matrix rotated 90 grades
 */
export default function rotateMatrixOptimized(matrix) {
  if (!matrix.length || matrix.length !== matrix[0].length) return matrix;

  for (let layer = 0; layer < matrix.length / 2; layer += 1) {
    const first = layer;
    const last = matrix.length - 1 - layer;
    for (let i = first; i < last; i += 1) {
      const offset = i - layer;
      const top = matrix[first][i];
      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }

  return matrix;
}

/**
 * Given a matrix NxN, it rotates the matrix 90 grades
 * - Time complexity: O(n^2)
 * @param {Array.<Array.<number>>} matrix - The matrix to rotate
 * @returns {Array.<Array.<number>>} The matrix rotated 90 grades
 */
export function rotateMatrix(matrix) {
  const lengthMatrix = matrix.length;
  const matrixRotated = new Array(lengthMatrix)
    .fill(null)
    .map(() => new Array(lengthMatrix));

  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j += 1) {
      const newi = j;
      const newj = lengthMatrix - 1 - i;
      matrixRotated[newi][newj] = matrix[i][j];
    }
  }
  return matrixRotated;
}

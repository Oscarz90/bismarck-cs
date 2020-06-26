import { expect } from 'chai';
import rotateMatrixOptimized, { rotateMatrix } from './1.7';

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const result = [
  [13, 9, 5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3],
  [16, 12, 8, 4],
];

describe('Test Rotate Matrix 90 grades', function () {
  it(`Rotate the matrix   
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  `, function () {
    expect(rotateMatrix(matrix)).to.eql(result);
    expect(rotateMatrixOptimized(matrix)).to.eql(result);
  });
});

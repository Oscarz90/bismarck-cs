module.exports = {
  require: ['@babel/register'],
  reporter: ['lcov', 'text'],
  sourceMap: false,
  instrument: false,
  branches: 85,
  lines: 85,
  functions: 85,
  statements: 85,
  watermarks: {
    lines: [85, 95],
    functions: [85, 95],
    branches: [85, 95],
    statements: [85, 95],
  },
};

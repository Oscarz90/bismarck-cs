module.exports = {
  presets: ['@babel/preset-env'],
  env: {
    test: {
      plugins: ['istanbul'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};

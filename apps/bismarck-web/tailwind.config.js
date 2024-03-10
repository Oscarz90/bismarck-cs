const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const withMT = require('@material-tailwind/react/utils/withMT');
const { join } = require('path');
console.log(join(
  __dirname,
  '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
))
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
      
    ),
    '../../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

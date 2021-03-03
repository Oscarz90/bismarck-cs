/**
 * Calculate the compressed length of a given string
 * Time complexity: O(n)
 * @param {string} strCompressing - The given string to check its final compression length
 * @returns {number} The compressed length for the given string
 */
export function checkStringCompressedLength(strCompressing) {
  let charCounter = 0;
  let strCompressedLength = 0;
  for (let i = 0; i < strCompressing.length; i += 1) {
    charCounter += 1;
    if (
      i + 1 === strCompressing.length ||
      strCompressing[i] !== strCompressing[i + 1]
    ) {
      strCompressedLength += 1 + `${charCounter}`.length;
      charCounter = 0;
    }
  }
  return strCompressedLength >= strCompressing.length
    ? strCompressing.length
    : strCompressedLength;
}

/**
 * Compress a given string and if the compressed string length is major to the given string length then
 * it should return the original string istead of compressed string
 * - Time complexity: O(p + k^2)
 * @param {string} str - The given string to check its final compression length
 * @returns {string} The given string compressed
 * @see {@link https://www.sitepoint.com/javascript-fast-string-concatenation/|Javascript fast string concatenation}
 * @see {@link https://www.codeproject.com/Articles/12375/JavaScript-StringBuilder|JavaScript StringBuilder}
 */
export default function stringCompressionOptimized(str) {
  if (!str) return '';

  const stringCompressedlength = checkStringCompressedLength(str);
  if (stringCompressedlength >= str.length) return str;

  const stringCompressingAsArray = [];
  let characterCounter = 0;
  for (let i = 0; i < str.length; i += 1) {
    characterCounter += 1;
    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      stringCompressingAsArray.push(str[i]);
      stringCompressingAsArray.push(characterCounter);
      characterCounter = 0;
    }
  }

  return stringCompressingAsArray.join('');
}

/**
 * Compress a given string and if the compressed string length is major to the given string length then
 * it should return the original string istead of compressed string
 * - Time complexity: O(p + k^2)
 * @param {string} str - The given string to check its final compression length
 * @returns {string} The given string compressed
 * @see {@link https://www.sitepoint.com/javascript-fast-string-concatenation/|Javascript fast string concatenation}
 * @see {@link https://www.codeproject.com/Articles/12375/JavaScript-StringBuilder|JavaScript StringBuilder}
 */
export function stringCompressionOptimizedFirstApproach(str) {
  if (!str) return '';
  let characterCounter = 0;
  let characterCompressing = '';
  for (let i = 0; i < str.length; i += 1) {
    characterCounter += 1;

    if (i + 1 === str.length || str[i] !== str[i + 1]) {
      characterCompressing += `${str[i]}${characterCounter}`;
      characterCounter = 0;
    }
  }

  return characterCompressing.length < str.length ? characterCompressing : str;
}

/**
 * Compress a given string and if the compressed string length is major to the given string length then
 * it should return the original string istead of compressed string
 * - Time complexity: O(p + k^2)
 * @param {string} str - The given string to check its final compression length
 * @returns {string} The given string compressed
 * @see {@link https://www.sitepoint.com/javascript-fast-string-concatenation/|Javascript fast string concatenation}
 * @see {@link https://www.codeproject.com/Articles/12375/JavaScript-StringBuilder|JavaScript StringBuilder}
 */
export function stringCompression(str) {
  if (!str) return '';

  let characterCompressing = str[0];
  let characterCounter = 0;
  let stringCompressed = '';
  for (let i = 0; i < str.length; i += 1) {
    if (characterCompressing !== str[i]) {
      stringCompressed = `${stringCompressed}${characterCompressing}${characterCounter}`;
      characterCompressing = str[i];
      characterCounter = 1;
    } else {
      characterCounter += 1;
    }
  }

  stringCompressed = `${stringCompressed}${characterCompressing}${characterCounter}`;

  if (stringCompressed.length > str.length) return str;

  return stringCompressed;
}

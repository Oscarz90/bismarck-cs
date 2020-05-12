/* eslint-disable no-bitwise */
/**
 * Test if a given string has all unique characters
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 * - Optimized version, it uses bitwise operations and bit masks
 * @param {String} str The given string to test
 * @returns {Boolean} True for strings with all unique characters, false for those that has repeated characters
 * @see [bit masks & bitwise operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
 */
export default function isUniqueOptimized(str) {
  if (!str) return false;

  if (str.length === 1) return true;

  let mask = 0;
  const aUnicode = 'a'.charCodeAt(0);
  for (let i = 0; i < str.length; i += 1) {
    const charIndex = str.charCodeAt(i) - aUnicode;
    const newMask = 1 << charIndex;
    if ((mask & newMask) > 0) return false;
    mask |= newMask;
  }
  return true;
}

/**
 * Test if a given string has all unique characters
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 * @param {string} str - The given string to test
 * @returns {boolean} True for strings with all unique characters, false for those that has repeated characters
 */
export function isUnique(str) {
  if (!str) return false;

  const tracking = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length; i++) {
    const unicodeId = str.charCodeAt(i);
    if (tracking[unicodeId]) {
      return false;
    }
    tracking[unicodeId] = true;
  }

  return true;
}

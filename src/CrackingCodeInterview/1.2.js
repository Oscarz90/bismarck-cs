/**
 * Check if a given string is a permutation of a second one
 * - Time complexity: O(n+n) ~ O(n)
 * @param {string} strOne - Main string
 * @param {string} strTwo - Permutation of the main string
 * @returns {boolean} Return false if the two given strings are not permutation between them
 */
export default function checkPermutationOptimized(strOne, strTwo) {
  if (strOne.length !== strTwo.length) return false;

  const strOneCounter = {};

  for (let i = 0; i < strOne.length; i += 1) {
    const char = strOne[i];
    strOneCounter[char] = (strOneCounter[char] || 0) + 1;
  }

  for (let i = 0; i < strTwo.length; i += 1) {
    strOneCounter[strTwo[i]] -= 1;
    if (strOneCounter < 0) return false;
  }

  return true;
}

/**
 * Check if a given string is a permutation of a second one
 * - Time complexity: O(n log(n) + m log(m))
 * @param {string} strOne - Main string
 * @param {string} strTwo - Permutation of the main string
 * @returns {boolean} Return false if the two given strings are not permutation between them
 */
export function checkPermutation(strOne, strTwo) {
  if (strOne.length !== strTwo.length) return false;

  return strOne.split('').sort().join('') === strTwo.split('').sort().join('');
}

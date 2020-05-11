/**
 * Check if a string has a permutation that is a palindrome
 * Time complexity: O(n)
 * @param {string} str - The given string to check if a permutation is a palindrome
 * @returns {boolean} A boolean value indicating if the given string is a permutation of itself and a palindrome
 */
export default function palindromePermutationOptimized(str) {
  const tableFrequency = {};
  let countOdd = 0;
  for (let i = 0; i < str.length; i += 1) {
    tableFrequency[str.charAt(i)] = (tableFrequency[str.charAt(i)] || 0) + 1;
    if (tableFrequency[str.charAt(i)] % 2 === 1) {
      countOdd += 1;
    } else {
      countOdd -= 1;
    }
  }

  return countOdd <= 1;
}

/**
 * Check if a string has a permutation that is a palindrome
 * Time complexity: O(n)
 * @param {string} str - The given string to check if a permutation is a palindrome
 * @returns {boolean} A boolean value indicating if the given string is a permutation of itself and a palindrome
 */
export function palindromePermutation(str) {
  const charFrequency = {};

  for (let i = 0; i < str.length; i += 1) {
    charFrequency[str.charAt(i)] = (charFrequency[str.charAt(i)] || 0) + 1;
  }

  const chars = Object.keys(charFrequency);

  let hasOdd = false;
  for (let i = 0; i < chars.length; i += 1) {
    if (charFrequency[chars[i]] % 2 === 1) {
      if (hasOdd) return false;
      hasOdd = true;
    }
  }

  return true;
}

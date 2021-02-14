/**
 * Encode text's spaces with %20
 * - Time complexity: O(n)
 * @param {string} str - The string to encode
 * @param {number} realLength - The real lenght of the text without left and right spaces
 * @returns {string} The string with spaces encoded
 */
export default function URLifyOptimized(str, realLength) {
  const LENGTH_SPACE_ENCODED = 2;
  let countSpaces = 0;

  for (let i = 0; i < realLength; i += 1) {
    if (str.charAt(i) === ' ') countSpaces += 1;
  }

  const spaceNeeded = countSpaces * LENGTH_SPACE_ENCODED + realLength;
  if (spaceNeeded > str.length) return str;

  let editingIndex = spaceNeeded - 1;
  const strAsArray = str.split('');

  for (let i = realLength - 1; i > 0; i -= 1) {
    if (strAsArray[i] === ' ') {
      strAsArray[editingIndex] = '0';
      strAsArray[editingIndex - 1] = '2';
      strAsArray[editingIndex - 2] = '%';
      editingIndex -= 3;
    } else {
      strAsArray[editingIndex] = strAsArray[i];
      editingIndex -= 1;
    }
  }
  return strAsArray.join('');
}

/**
 * Encode text's spaces with %20
 * - Time complexity: O(n)
 * @param {string} str - The string to encode
 * @param {number} realLength - The real lenght of the text without left and right spaces
 * @returns {string} The string with spaces encoded
 */
export function URLify(str, realLength) {
  const LENGTH_SPACE_ENCODED = 3;
  const SPACE_ENCODED = '%20';

  const countSpaces = str
    .split('')
    .slice(0, realLength)
    .reduce((total, char) => {
      if (char === ' ') return total + 1;
      return total;
    }, 0);

  const spaceNeeded = countSpaces * LENGTH_SPACE_ENCODED;
  const strWithoutSpaces = realLength - countSpaces;
  if (strWithoutSpaces + spaceNeeded > str.length) return str;

  return str.slice(0, realLength).split(' ').join(SPACE_ENCODED);
}

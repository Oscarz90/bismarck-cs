/**
 * Find the smallest value within a given list
 * - Time complexity: O(n)
 * @param {Array.<Number>} list - The given list to look within it the lowest value
 * @returns {number} The smallest value of the given list
 */
export function findLowest(list) {
  let smallestIndex = 0;
  let smallestValue = list[0];
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] < smallestValue) {
      smallestIndex = i;
      smallestValue = list[i];
    }
  }

  return smallestIndex;
}

/**
 * Selection Sort Algorithm
 * - Time complexity: O(n^2)
 * @param {Array.<number>} list - A list of items to order
 * @returns {Array.<number>} The list ordered from lowest to highest
 */
export default function SelectionSort(list) {
  const newList = [];
  let tempList = [...list];

  while (tempList.length) {
    const smallestIndex = findLowest(tempList);
    newList.push(tempList[smallestIndex]);
    tempList = [
      ...tempList.slice(0, smallestIndex),
      ...tempList.slice(smallestIndex + 1),
    ];
  }

  return newList;
}

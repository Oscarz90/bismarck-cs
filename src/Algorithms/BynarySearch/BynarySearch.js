/**
 * Bynary Search
 * @param {Array.<*>} list - A list of items to search through it
 * @param {*} item - The item to find on the given list
 */
export default function BynarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const med = Math.round(low + high);
    if (list[med] === item) return med;
    if (item > list[med]) {
      low = med + 1;
    } else {
      high = med - 1;
    }
  }

  return null;
}

/**
 *
 * @param {string} str
 * @param {string} strEdited
 */
export default function oneAwayOptimized(str1, str2) {
  if (Math.abs(str1.length - str2.lengt) > 1) return false;
  const strLarge = str1.length > str2.length ? str1 : str2;
  const strShort = str1.length > str2.length ? str2 : str1;

  let indexStrLarge = 0;
  let indexStrShort = 0;
  let foundDifference = false;
  while (indexStrLarge < strLarge.length && indexStrShort < strShort.length) {
    if (strLarge.charAt(indexStrLarge) !== strShort.charAt(indexStrShort)) {
      if (foundDifference) return false;
      foundDifference = true;
      if (strLarge.length === strShort.length) indexStrShort += 1;
    } else {
      indexStrShort += 1;
    }
    indexStrLarge += 1;
  }
  return true;
}
/**
 * Determine if a given string has zero or one edit action on it (edit, delete or add actions are valid)
 * @param {string} str - The original string
 * @param {string} strEdited - The string edited
 * @returns {boolean} A true value when the given string has zero or one edition and false for the oposite
 */
export function oneAway(str, strEdited) {
  if (str === strEdited) return true;

  let charsEdited = 0;
  if (str.length === strEdited.length || str.length === strEdited.length + 1) {
    let strEditIndex = 0;
    for (let i = 0; i < str.length; i += 1) {
      if (
        str.length === strEdited.length &&
        str.charAt(i) !== strEdited.charAt(i)
      ) {
        charsEdited += 1;
      }

      if (str.length === strEdited.length + 1) {
        if (str.charAt(i) !== strEdited.charAt(strEditIndex)) {
          charsEdited += 1;
        } else {
          strEditIndex += 1;
        }
      }
    }

    if (charsEdited > 1) return false;
    return true;
  }

  if (str.length === strEdited.length - 1) {
    let strIndex = 0;
    for (let i = 0; i < strEdited.length; i += 1) {
      if (str.charAt(strIndex) !== strEdited.charAt(i)) {
        charsEdited += 1;
      } else {
        strIndex += 1;
      }
    }
    if (charsEdited > 1) return false;
    return true;
  }

  return false;
}

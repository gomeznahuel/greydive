/**
 * @param word string to be capitalized
 * @returns string with first letter capitalized
 */

const capitalLetter = ( word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export default capitalLetter;
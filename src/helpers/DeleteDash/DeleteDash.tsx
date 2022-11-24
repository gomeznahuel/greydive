/**
 * @param word string to be replaced dash with space
 * @returns string with dash replaced with space
 */

const deleteDash = (word: string) => {
  return word.replace(/-/g, " ");
};

export default deleteDash;

/**
 * Return a capitalized copy of a string.
 *
 * @param {string} str The string to be capitalized.
 * @return {string} The capitalized string.
 */
export function capitalize(str: string): string {
  const lowerCased = str.toLowerCase();
  const startingLetter = lowerCased.slice(0, 1).toUpperCase();
  return `${startingLetter}${lowerCased.slice(1)}`;
}

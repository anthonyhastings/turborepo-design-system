/**
 * Return a string that has been reversed.
 *
 * @param {string} str The string to be reversed.
 * @return {string} The reversed string.
 */
export function reverse(str: string): string {
  return str.split('').reverse().join('');
}

import { reverse } from './reverse.js';

describe('#reverse', () => {
  test.each([
    ['hello', 'olleh'],
    ['deed', 'deed'],
    ['', ''],
  ])('reverses strings', (untreatedString, expectedString) => {
    expect(reverse(untreatedString)).toEqual(expectedString);
  });
});

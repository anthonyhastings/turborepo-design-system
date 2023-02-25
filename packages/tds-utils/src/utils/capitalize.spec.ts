import { capitalize } from './capitalize';

describe('#capitalize', () => {
  test.each([
    ['hello', 'Hello'],
    ['World', 'World'],
    ['', ''],
  ])('capitalizes strings', (untreatedString, expectedString) => {
    expect(capitalize(untreatedString)).toEqual(expectedString);
  });
});

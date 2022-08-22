import { toSlug } from './toSlug';

describe('#toSlug', () => {
  test.each([
    ['   Cain & Abel   ', 'cain-and-abel'],
    ['The Sandman', 'the-sandman'],
    ['Where----art----thou', 'where-art-thou'],
  ])(
    'trims whitespace and slugifies strings',
    (untreatedString, expectedString) => {
      expect(toSlug(untreatedString)).toEqual(expectedString);
    }
  );
});

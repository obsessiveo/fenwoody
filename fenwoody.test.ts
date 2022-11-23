import { convertFenToSvg } from './src/convert-fen';
import { Options } from './src/types';

describe('Fenwoody', () => {
  const options: Options = {
    inverted: false,
    showCoordinates: true,
  };
  const svg = convertFenToSvg('r2qk3/pp2n1p1/2ppPp2/6p1/2B5/7r/PP2QPPP/4R1K1 w q - 0 19', options);
  test('should return a string', () => {
    expect(typeof svg).toBe('string');
  });
  test('should return a valid svg', () => {
    // expect(svg).toMatch(/^<svg/);
    expect(svg).toMatch(/<svg(.*)>[^]*<\/svg>/m);
  });
});

// Path: fenwoody.test.ts

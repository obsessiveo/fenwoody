import { convertFenToSvg } from './src/convert-fen';
import { FenWoodyOptions, initialFEN } from './src/types';

describe('Fenwoody', () => {
  const options: FenWoodyOptions = {
    inverted: false,
    showCoordinates: true,
    outputFormat: 'base64',
  };
  const svg = convertFenToSvg(initialFEN, options);
  console.log(svg);
  test('should return a string', () => {
    expect(typeof svg).toBe('string');
  });
  test('should return a valid svg', () => {
    // expect(svg).toMatch(/^<svg/);
    expect(svg).toMatch(/<svg(.*)>[^]*<\/svg>/m);
  });
});

// Path: fenwoody.test.ts

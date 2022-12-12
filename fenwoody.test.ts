import { convertFenToSvg } from './src/convert-fen';
import { validateFen } from './src/fen';
import { FenWoodyOptions, initialFEN } from './src/types';

describe('Fenwoody', () => {
  const options: FenWoodyOptions = {
    inverted: false,
    showCoordinates: true,
    outputFormat: 'svg',
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

const FenStrings = [
  {
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    valid: true,
  },
  {
    fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
    valid: true,
  },
  {
    fen: 'rnbqkbnr/pp1ppppp/81/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
    valid: false,
  },
];

describe('Validate a fen string', () => {
  test.each(FenStrings)('should return $valid for $fen', ({ fen, valid }) => {
    expect(validateFen(fen)).toBe(valid);
  });
});

// Path: fenwoody.test.ts

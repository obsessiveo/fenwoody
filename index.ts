/*
Copyright (c) 2022 Obsessiveo
*/

import { convertFenToSvg } from './src/convert-fen';
import { Options } from './src/types';

function main() {
  const options: Options = {
    inverted: false,
    showCoordinates: true,
  };
  const svg = convertFenToSvg('r2qk3/pp2n1p1/2ppPp2/6p1/2B5/7r/PP2QPPP/4R1K1 w q - 0 19', options);

  console.log(svg);
}

main();

// Path: index.ts

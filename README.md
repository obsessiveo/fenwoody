# fenwoody

## 1. Introduction

fenwoody is a simple and easy-to-use tool for generating an svg string representing the board and the pieces.

Can be used for example as a static image for a chess game.

For example the FEN string `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1` generates:

![For example](/assets/example.svg)

## 2. Installation

```bash
npm install @obsessiveo/fenwoody
```

## 3. Usage

```javascript
import { convertFenToSvg, FenWoodyOptions, initialFEN } from '@obsessiveo/fenwoody';

// initialFEN is the default FEN string
// rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1

const options:FenWoodyOptions = {
  inverted: true /* boolean, true if the board should be inverted, e.g. black pieces at the bottom */,
  lightColor: '#f0d9b5' /* string, optional hex value color of the light board squares, defaults to #f0d9b5 (# is a must)  */,
  darkColor: '#b58863' /* string, optonal hex value color of the dark board squares, defaults to #b58863 (# is a must) */,
  showCoordinates: true /* boolean, true if the coordinates should be shown, e.g. ranks and files */,
  outputFormat: 'svg' /* 'svg' or 'base64' optional the output format, defaults to 'svg' */,
};

// if outputFormat is 'base64' the result will be a Data URI base64 encoded string, e.g. string "data:image/svg+xml;base64,..."

const svg = convertFenToSvg(initialFEN, options);
```

## Resources
- [Great svg editor](https://editsvgcode.com/)
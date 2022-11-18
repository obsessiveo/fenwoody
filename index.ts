/*
Copyright (c) 2022 Obsessiveo
*/

import { fenToPieces } from './libs/fen';
import { darkColor, initialFEN, lightColor, Pieces } from './libs/types';
import { SVGBOARD } from './board.svg';

function convertSvg(pieces: Pieces, inverted: boolean): string {
  let svg = SVGBOARD.replace('{light}', lightColor).replace('{dark}', darkColor);
  svg = svg.replace(
    '<!-- Coordinates -->',
    inverted ? `<use href="#coordinates-inverted" />` : `<use href="#coordinates-normal" />`
  );
  let svgPieces = '';
  pieces.forEach((piece, key) => {
    const x = key.charCodeAt(0) - 'a'.charCodeAt(0);
    const y = key.charCodeAt(1) - '1'.charCodeAt(0);
    const svgPieceId = `${piece.role}${piece.color}`; // e.g. 'pl' for light pawn
    // <use x="0" y="0" href="#kl"/>
    svgPieces += `<use x="${(inverted ? 7 - x : x) * 45}" y="${(inverted ? y : 7 - y) * 45}" href="#${svgPieceId}"/>\n`;
  });

  svg = svg.replace('<!-- Pieces -->', svgPieces);
  return svg;
}

function main() {
  const board = fenToPieces('r2qk3/pp2n1p1/2ppPp2/6p1/2B5/7r/PP2QPPP/4R1K1 w q - 0 19');
  const svg = convertSvg(board, true);
  console.log(svg);
}

main();

// Path: index.ts

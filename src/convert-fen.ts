/*
Copyright (c) 2022 Obsessiveo
*/

import * as woodyTypes from './types';
import { SVGBOARD } from './board.svg';
import { fenToPieces } from './fen';

/**
 * Converts a FEN to a SVG board.
 * @param fen the FEN to convert
 * @param options the options to use
 * @returns the SVG board
 */
export function convertFenToSvg(fen: string, options: woodyTypes.Options): string {
  // the default colors
  const lightColor = options.lightColor ?? woodyTypes.lightColor;
  const darkColor = options.darkColor ?? woodyTypes.darkColor;

  // get the pieces from the fen
  // fen is not validated here
  const pieces: woodyTypes.Pieces = fenToPieces(fen);

  // add the colors to tyhe final svg
  let svg = SVGBOARD.replace('{light}', lightColor).replace('{dark}', darkColor);
  // add the coordinates if needed
  if (options.showCoordinates) {
    svg = svg.replace(
      '<!-- Coordinates -->',
      options.inverted ? `<use href="#coordinates-inverted" />` : `<use href="#coordinates-normal" />`
    );
  }

  // create the svg pieces, one piece per line
  let svgPieces = '';
  pieces.forEach((piece, key) => {
    const xx = key.charCodeAt(0) - 'a'.charCodeAt(0);
    const x = (options.inverted ? 7 - xx : xx) * woodyTypes.squareSize;
    const yy = key.charCodeAt(1) - '1'.charCodeAt(0);
    const y = (options.inverted ? yy : 7 - yy) * woodyTypes.squareSize;
    const svgPieceId = `${piece.role}${piece.color}`; // e.g. 'pl' for light pawn
    svgPieces += `<use x="${x}" y="${y}" href="#${svgPieceId}"/>\n`;
  });

  svg = svg.replace('<!-- Pieces -->', svgPieces);

  return svg;
}

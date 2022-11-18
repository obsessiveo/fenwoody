/*
Copyright (c) 2022 Obsessiveo
*/

import * as woodyTypes from './types';

const roles: { [letter: string]: woodyTypes.Role } = {
  p: 'p',
  r: 'r',
  n: 'n',
  b: 'b',
  q: 'q',
  k: 'k',
};

/**
 * @description Convert a fen string (only pieces) to a map of pieces
 * @param fen The fen string
 * @returns Map of pieces
 */
export function fenToPieces(fen: woodyTypes.FEN): woodyTypes.Pieces {
  const pieces: woodyTypes.Pieces = new Map<woodyTypes.Key, woodyTypes.Piece>();

  let row = 7,
    col = 0;
  for (const c of fen) {
    if ('12345678'.includes(c)) {
      col += parseInt(c, 10);
    } else if ('prnbqkPRNBQK'.includes(c)) {
      const cl = c.toLowerCase();
      const role = roles[cl] as woodyTypes.Role;
      const color: woodyTypes.Color = c === cl ? 'd' : 'l';
      pieces.set((woodyTypes.files[col] + woodyTypes.ranks[row]) as woodyTypes.Key, {
        role,
        color,
      });
      col++;
    } else if (c === '/') {
      row--;
      col = 0;
    } else if (c === ' ') {
      break;
    }
  }
  return pieces;
}

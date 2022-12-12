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
 * @description Convert a fen string (only pieces) to a map of pieces and coordinates
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
      /* space, ignore the rest of the fen */
      break;
    }
  }
  return pieces;
}

/**
 *
 * @param fen The fen string
 * @returns true if the fen is valid, false otherwise
 */
export function validateFen(fen: woodyTypes.FEN): boolean {
  // from https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation

  // 1. A FEN record contains six fields, each separated by a space.
  const chunks = fen.split(' ');
  if (chunks.length !== 6) return false;

  const [piecePlacement, activeColor, castling, enPassant, halfMoveClock, fullMoveNumber] = chunks;

  // 2. The first field contains the placement of the pieces on the board.
  // The board is divided into eight rows, and each row contains eight fields.
  const ranks = piecePlacement.split('/');
  if (ranks.length !== 8) return false;
  for (const rank of ranks) {
    let sum = 0;
    for (const c of rank) {
      if ('12345678'.includes(c)) {
        sum += parseInt(c, 10);
      } else if ('prnbqkPRNBQK'.includes(c)) {
        sum++;
      } else {
        return false;
      }
    }
    if (sum !== 8) return false;
  }

  // 3. The second field contains the active color.
  if (!/^[wb]$/.test(activeColor)) return false;

  // 4. The third field contains castling availability.
  if (!/^[KQkq-]{1,4}$/.test(castling)) return false;

  // 5. The fourth field contains the en passant target square.
  if (!/^[a-h1-8-]{1,2}$/.test(enPassant)) return false;

  // 6. The fifth field contains the halfmove clock.
  if (!/^[0-9]{1,2}$/.test(halfMoveClock)) return false;

  // 7. The sixth field contains the fullmove number.
  if (!/^[0-9]{1,4}$/.test(fullMoveNumber)) return false;
  return true;
}

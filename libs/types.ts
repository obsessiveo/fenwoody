export type Color = typeof colors[number];
export type Role = 'k' | 'q' | 'r' | 'b' | 'n' | 'p';
export type File = typeof files[number];
export type Rank = typeof ranks[number];
export type Key = `${File}${Rank}`;
export type FEN = string;
export interface Piece {
  role: Role;
  color: Color;
}

export type Pieces = Map<Key, Piece>;

export type BoardFromFEN = {
  fen: FEN;
  pieces: Pieces;
  side: Color;
};

export const colors = ['l', 'd'] as const;
export const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const;
export const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'] as const;
export const initialFEN: FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' as const;
export const lightColor = '#f0d9b5' as const;
export const darkColor = '#b58863' as const;

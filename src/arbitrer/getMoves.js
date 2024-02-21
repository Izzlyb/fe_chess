

export const getRookMoves = ( position, piece, rank, file ) => {
  const moves = [];
  const us = piece[0];
  const enemy = us === 'w' ? 'b' : 'w';

  const direction = [          // the rook movement:
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  direction.forEach(dir => {
    for( let i = 1; i < 8; i++ ) {
      const x = rank + (i * dir[0]);
      const y = file + (i * dir[1]);

      if( position?.[x]?.[y] === undefined ) {
        // console.log("move to current position: " + currentPosition?.[x]?.[y]);
        break;
      }
      if( position?.[x]?.[y].startsWith(enemy)) {
        moves.push([x, y]);
        // console.log("current position is ENEMY, CAN NOT proceed: ");
        break;
      } 
      if( position?.[x]?.[y].startsWith(us)) {
        // console.log("current position is US: ");
        break;
      } 

      // continue adding possible moves
      moves.push([x, y]);
    }
  })

  return moves;
}

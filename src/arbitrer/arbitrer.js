import { getRookMoves } from "./getMoves";

const arbitrer = {
  getRegularMoves : function({ position, piece, rank, file }) {
    return getRookMoves(position, piece, rank, file, true);
  }
}

export default arbitrer;


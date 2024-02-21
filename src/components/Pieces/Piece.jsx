import { generateCandidateMoves } from "@/Reducer/Actions/move";
import arbitrer from "@/arbitrer/arbitrer";
import { useAppContext } from "@/contexts/Context";
import React from "react";

const Piece = ({
  rank, 
  file,
  piece,
}) => {
  
  const {appState, dispatch} = useAppContext();
  const {turn, position } = appState;
  const currentPosition = position[position.length - 1];

  const onDragStart = (e) => {
    // console.log(e);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', `${piece},${rank},${file}`);
    setTimeout(() => {
      e.target.style.display = 'none'
    });

    if( turn === piece[0] ) {
      const candidateMoves = arbitrer.getRegularMoves({ position:currentPosition, piece, rank, file }); 
      console.log(candidateMoves);
      dispatch( generateCandidateMoves({candidateMoves}));
    }

  }

  const onDragEnd = e => { e.target.style.display = 'block'};

  return (
    <div
        className = {`piece ${piece} p-${file}${rank}`}
        draggable={true}
        onDragStart={onDragStart} 
        onDragEnd={onDragEnd}
      />
  );
};

export default Piece;

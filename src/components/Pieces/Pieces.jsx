"use client"

import React, { useRef, useState } from "react";
import { copyPosition } from "@/app/helper";
import Piece from "./Piece";

import "../../app/globals.css";
import "./Pieces.css";
import { useAppContext } from "@/contexts/Context";
import { clearCandidates, makeNewMove } from "@/Reducer/Actions/move";

const Pieces = () => {

  const ref = useRef();

  const {appState, dispatch} = useAppContext();

  const currentPosition = appState.position[appState.position.length - 1];

  const calculateCoords = e => {
    const { width, left, top } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top ) / size);

    return { x, y }
  }

  const onDrop = (e) => {
    e.preventDefault();

    const newPosition = copyPosition( currentPosition );
    const {x, y} = calculateCoords(e);

    const [p, rank, file] = e.dataTransfer.getData('text').split(',');

    if( appState.candidateMoves?.find(m => m[0] === x && m[1] === y )) {
      newPosition[Number(rank)][Number(file)] = '';
      newPosition[x][y] = p;

      dispatch(makeNewMove({newPosition}));
    }

    dispatch(clearCandidates());

  }
  // console.log(position);

  const onDragOver = e => {e.preventDefault();}

  return (
    <div 
        onDrop = {onDrop}
        onDragOver={onDragOver}
        className='pieces'
        ref={ref}>
      {currentPosition.map(( r, rank ) => 
        r.map(( f, file) => 
        currentPosition[rank][file]
          ? < Piece 
                key={rank+'-'+file}
                rank={rank}
                file={file}
                piece={currentPosition[rank][file]} />
          : null
        )
      )}
    </div>
  );
};

export default Pieces;

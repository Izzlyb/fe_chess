"use client"

import { useReducer } from "react";

import Board from "@/components/Board";
import AppContext from "@/contexts/Context";

import { reducer } from "@/Reducer/reducer";
import { initGameState } from "./constant";

export default function Home() {

  const [ appState, dispatch ] = useReducer( reducer, initGameState );

  const providerState = {
    appState,
    dispatch
  }

  return (
    <AppContext.Provider value = {providerState}>
      <div className="App">
        <Board/>
      </div>
    </AppContext.Provider>
  );
}


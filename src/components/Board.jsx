import { getCharacter } from "@/app/helper";
import "@/app/globals.css";
import "./Board.css";
import Ranks from "./bits/Ranks";
import Files from "./bits/Files";
import Pieces from "./Pieces/Pieces";

const Board = () => {

  const getClassName = (i, j) => {
    let c = 'tile';
    c+= (i+j) % 2 === 0 ? '--light' : '--dark';

    return c;
  }

  const ranks = Array(8).fill().map(( x, i ) => 8-i);
  const files = Array(8).fill().map(( x, i ) => getCharacter( i ));

  return (
    <div className="board">

      <Ranks ranks={ranks}/>

      <div className="tiles">
        {ranks.map(( rank, i ) =>
          files.map(( file, j ) => 
            <div key={file+'-'+rank} 
                className={getClassName( i, j )}>{rank}{file}</div>
          )
        )}
      </div>

      <Pieces />

      <Files files = {files} />

    </div>
  );
};

export default Board;

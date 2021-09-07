import React from "react";
import Square from "./Square";

type BoardProps = {

};

const Board: React.FC<BoardProps> = () => {
  const status: string = 'Next player: X';
  const renderSquare = (i: number) => {
    return <Square num={i}/>;
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
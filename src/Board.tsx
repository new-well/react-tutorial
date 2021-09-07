import React, { useState } from "react";
import Square from "./Square";

type BoardProps = {

};

const Board: React.VFC<BoardProps> = () => {
  const [marks, setMarks] = useState<string[]>(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const renderSquare = (i: number): JSX.Element => {
    return<Square mark={marks[i]} handleClick={() => handleClick(i)} />;
  };

  const handleClick = (num: number): void => {
    const _marks = marks.concat();
    if (calculateWinner(marks) !== "" || marks[num] !== "") {
      return;
    }
    _marks[num] = xIsNext ? "X" : "O";
    setMarks(_marks);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (marks: string[]): string => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (marks[a] && marks[a] === marks[b] && marks[a] === marks[c]) {
        return marks[a];
      }
    }
    return "";
  };

  return (
    <div>
      <div className="status">
        {
          calculateWinner(marks) === "" ?
          "Next player: " + (xIsNext ? "X" : "O") :
          "Winner: " + calculateWinner(marks)
        }
      </div>
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

import React from 'react';
import Square from './Square';

type BoardProps = {
  squares: string[],
  handleClick: (num: number) => void
};

const Board: React.VFC<BoardProps> = ({ squares, handleClick }) => {

  const renderSquare = (num: number): JSX.Element => {
    return<Square value={squares[num]} handleClick={() => handleClick(num)} />;
  };

  return (
    <div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;

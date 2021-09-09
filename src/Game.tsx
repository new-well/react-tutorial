import React, { useState } from 'react';
import Board from './Board'
import calculateWinner from './CalculateWinner'

type GameProps = {

};

const Game: React.VFC<GameProps> = () => {
  const [history, setHistory] = useState<string[][]>([Array(9).fill('')]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const getStatus = (): string => {
    const currentSquares: string[] = history[history.length - 1];
    const winner: string = calculateWinner(currentSquares);
    const status: string = winner !== '' ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');
    return status;
  };

  const handleClick = (num: number): void => {
    const _history: string[][] = history.slice();
    const currentSquares: string[] = history[history.length - 1].slice();
    if (calculateWinner(currentSquares) !== '' || currentSquares[num] !== '') {
      return;
    }
    currentSquares[num] = xIsNext ? 'X' : 'O';
    setHistory(_history.concat([currentSquares]));
    setXIsNext(!xIsNext);
  };

  const jumpTo = (): void => {

  };

  return (
    <div className='game'>
      <div className='game-board'>
        <Board
          squares={history[history.length - 1]}
          handleClick={(num: number) => handleClick(num)}
        />
      </div>
      <div className='game-info'>
        <div>{getStatus()}</div>
        <ol>
          {
            history.map((): JSX.Element => {
              return (
                <li>
                  <button onClick={() => jumpTo()}>desc</button>
                </li>
              );
            })
          }
        </ol>
      </div>
    </div>
  );
};

export default Game;

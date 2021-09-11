import React, { useState } from 'react';
import Board from './Board'
import calculateWinner from './CalculateWinner'

type GameProps = {

};

const Game: React.VFC<GameProps> = () => {
  const [history, setHistory] = useState<string[][]>([Array(9).fill('')]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const getStatus = (): string => {
    const currentSquares: string[] = history[currentStep].slice();
    const winner: string = calculateWinner(currentSquares);
    const status: string = winner !== '' ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');
    return status;
  };

  const handleClick = (num: number): void => {
    const _history: string[][] = history.slice(0, currentStep + 1);
    const currentSquares: string[] = _history[currentStep].slice();
    if (calculateWinner(currentSquares) !== '' || currentSquares[num] !== '') {
      return;
    }
    currentSquares[num] = xIsNext ? 'X' : 'O';
    setHistory(_history.concat([currentSquares]));
    setCurrentStep(currentStep+1);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number): void => {
    setCurrentStep(step);
    setXIsNext(step % 2 === 0);
  };

  return (
    <div className='game'>
      <div className='game-board'>
        <Board
          squares={history[currentStep].slice()}
          handleClick={(num: number) => handleClick(num)}
        />
      </div>
      <div className='game-info'>
        <div>{getStatus()}</div>
        <ol>
          {
            history.map((_, step: number): JSX.Element => {
              const desc: string = step ?
                'Go to move #' + step :
                'Go to game start';
              return (
                <li key={step}>
                  <button onClick={() => jumpTo(step)}>{desc}</button>
                </li>
              );
            })
          }
        </ol>
      </div>
    </div>
  );
}

export default Game;

import React from "react";
import Board from "./Board"

type GameProps = {

};

const Game: React.VFC<GameProps> = () => {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
};

export default Game;

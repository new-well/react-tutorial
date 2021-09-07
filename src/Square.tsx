import React from "react";

type SquareProps = {
  mark: string;
  handleClick: () => void;
};

const Square: React.VFC<SquareProps> = ({ mark, handleClick }) => {
  return (
    <button className="square" onClick={handleClick}>
      {mark}
    </button>
  );
};

export default Square;

import React from "react";

type SquareProps = {
  num: number,
};

const Square: React.FC<SquareProps> = ({ num }) => {
  return (
    <button className="square">
      {/* TODO */}
    </button>
  );
};

export default Square;

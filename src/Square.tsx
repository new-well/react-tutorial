import React, { useState } from "react";

type SquareProps = {
  value: number,
};

const Square: React.FC<SquareProps> = ({ value }) => {
  const [mark, setMark] = useState("");

  return (
    <button className="square" onClick={() => setMark("X")}>
      {mark}
    </button>
  );
};

export default Square;

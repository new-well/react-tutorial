import React from 'react';

type SquareProps = {
  value: string;
  handleClick: () => void;
};

const Square: React.VFC<SquareProps> = ({ value, handleClick }) => {
  return (
    <button className='square' onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;

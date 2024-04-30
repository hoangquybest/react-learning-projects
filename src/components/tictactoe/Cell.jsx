import React from "react";

// Thay vì truyền vào props thì ngta cũng thường destructuring luôn
// const {value, onClick} = props
const Cell = ({ value, onClick, className }) => {
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;

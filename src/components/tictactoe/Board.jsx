import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="game-board">
      {props.cells.map((item, index) => {
        return (
          // Nhớ chú ý phải return chỗ này không thì sẽ bị lỗi
          <Cell
            key={index}
            value={item}
            onClick={() => props.onClick(index)}
            className={item === "x" ? "is-x" : item === "o" ? "is-o" : ""}
          /> // chu y phai co return o day
        );
      })}
    </div>
  );
};

export default Board;

import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../helpers";

const Game = () => {
  // Tạo mảng với 9 phần tử sử dụng Array(9).fill()
  //   const [board, setBoard] = useState(Array(9).fill(null));
  //   const [xIsNext, setXIsNext] = useState(true);
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  });
  const winner = calculateWinner(state.board);

  const handleClick = (index) => {
    // Sử dụng spread operator
    // để copy ra một mảng tránh ảnh hưởng đến mảng gốc ban đầu
    const boardCopy = [...state.board];

    // nếu có winner hoặc ô này đã được chọn thì không thể chọn tiếp
    if (winner || boardCopy[index]) return;

    // ô hiện tại sẽ là x nếu state hiện tại là xIsNext và ngược lại
    boardCopy[index] = state.xIsNext ? "x" : "o";

    // // set lại board bằng boardCopy
    // setBoard(boardCopy);

    // // set lại xIsNext nhớ là do cần dựa vào prevState nên ở đây
    // // sử dụng callback để tránh bị stale state
    // setXIsNext((xIsNext) => !xIsNext);

    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
  };

  const handleReset = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
    setState({
      ...state,
      board: Array(9).fill(null),
      xIsNext: true,
    });
  };

  console.log(winner);

  return (
    <div>
      <Board cells={state.board} onClick={handleClick} />
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="reset-btn" onClick={handleReset}>
        Reset game
      </button>
    </div>
  );
};

export default Game;

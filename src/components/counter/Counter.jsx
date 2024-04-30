import React, { useState } from "react";

const Counter = () => {
  //stale state
  const [count, setCount] = useState(0);

  // stale state

  const handleCount = () => {
    setTimeout(function delay() {
      // Ở đây phải sử dụng call back để tránh bị stale state
      // trường hợp bị stale state setCount(count + 1);
      setCount((count) => count + 1);
    }, 1000);
  };

  return <div onClick={handleCount}>Increment {count}</div>;
};

export default Counter;

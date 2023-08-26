import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);

  const increament = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const showCounter = () => {
    setShowCount(!showCount);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-primary mx-2" onClick={decrement}>
          -
        </button>
        <span className="mx-3">{count}</span>
        <button className="btn btn-primary mx-2" onClick={increament}>
          +
        </button>
      </div>
      <div className="text-center mt-3">
        {showCount && (
          <h4 className="text-center">you clicked {count} times</h4>
        )}
        <button onClick={showCounter} className="btn btn-primary">
          {showCount ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default Counter;

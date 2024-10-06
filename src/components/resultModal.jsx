import React, { forwardRef } from "react";

export const ResultModal = forwardRef(
  ({ targetTime, remainingTime, onReset }, ref) => {
    const userLost = remainingTime <= 0;
    const formattedTime = (remainingTime / 1000).toFixed(2);
    const result = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    return (
      <dialog ref={ref} className="result-modal" onClose={onReset}>
        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>Your score: {result}</h2>}
        <p>
          The target timer was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer with <strong>{formattedTime} seconds </strong>
          left
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>
    );
  }
);

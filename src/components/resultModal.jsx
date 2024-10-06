import React, { forwardRef } from "react";

export const ResultModal = forwardRef(({ targetTime, result }, ref) => {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>{result}</h2>
      <p>
        The target timer was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds </strong>left
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

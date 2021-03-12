import React from "react";

export function Counter() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </div>
  );
}

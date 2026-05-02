import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="sma-counter-box">
      <p>Count: {count}</p>
      <button
        className="sma-btn sma-btn-increment"
        onClick={() => setCount(count + 1)}
      >
        Increment 
      </button> <br />
      <button
        className="sma-btn sma-btn-decrement"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button> <br />
      <button
        className="sma-btn sma-btn-reset"
        onClick={() => setCount(count == 0)}
      >
        Reset
      </button> <br />
    </div>
  );
}
export default Counter;
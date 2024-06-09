import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default CounterApp;

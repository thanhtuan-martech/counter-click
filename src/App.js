import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  let color = (count > 0) ? "green" : (count < 0) ? "red" : "black";

  const increament = () => setCount(count + 1);
  const reset = () => setCount(0);
  const decreament = () => setCount(count - 1);

  return (
    <div className="container">
        <h1>Counter</h1>
        <span style={{ color }} id="value">{count}</span>
        <div className="btn-group">
            <button onClick={decreament} className="btn btn-decrease">DECREASE</button>
            <button onClick={reset} className="btn btn-reset">RESET</button>
            <button onClick={increament} className="btn btn-increase">INCREASE</button>
        </div>
    </div>
  );
}

export default App;

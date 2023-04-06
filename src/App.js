import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>COUNTER APP</h1>
      </header>
      <div className="content">
        <button className="btn" onClick={handleMinus}>
          -
        </button>
        <h1 className="counter">{count}</h1>
        <button className="btn" onClick={handlePlus}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;

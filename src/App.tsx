
import { useState } from "react";
import "./App.css";

const buttonStyle = {
  padding: "10px 16px",
  color: "white",
  border: "none",
  borderRadius: "8px",
  margin: "0 10px",
  fontSize: "20px",
  fontWeight: "bold",
  cursor: "pointer",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Counter</h1>
      <p id="count-label" aria-live="polite">
        Count: {count}
      </p>
      <div aria-labelledby="count-label">
        <button
          type="button"
          onClick={() => setCount((current) => current - 1)}
          aria-label="Decrease count"
          style={{
            ...buttonStyle,
            backgroundColor: "#dc2626",
            boxShadow: "0 4px 10px rgba(220, 38, 38, 0.3)",
          }}
        >
          −
        </button>
        <button
          type="button"
          onClick={() => setCount(0)}
          disabled={count === 0}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => setCount((current) => current + 1)}
          aria-label="Increase count"
          style={{
            ...buttonStyle,
            backgroundColor: "#16a34a",
            boxShadow: "0 4px 10px rgba(22, 163, 74, 0.3)",
          }}
        >
          +
        </button>
      </div>
    </main>
  );
}

export default App;

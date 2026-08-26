
import { useState } from 'react';
import './App.css'


function App() {
  const [count, SetCount] = useState(0);
  return (
    <>
    <h1>Hello Counter</h1>
    <div>
      <button id="decrement" onClick={() => SetCount(count - 1)} style={{ marginRight: "10px", padding: "10px 16px", backgroundColor: "#dc2626", color: "white", border: "none", borderRadius: "8px", marginLeft: "10px", fontSize: "20px", fontWeight: "bold", cursor: "pointer", boxShadow: "0 4px 10px rgba(220, 38, 38, 0.3)" }}>
        -
      </button>
      <span> {count} </span>
      <button id="increment" onClick={() => SetCount(count + 1)} style={{ padding: "10px 16px", marginRight: "10px", backgroundColor: "#16a34a", color: "white", border: "none", borderRadius: "8px", marginLeft: "10px", fontSize: "20px", fontWeight: "bold", cursor: "pointer", boxShadow: "0 4px 10px rgba(22, 163, 74, 0.3)" }}>
        +
      </button>
    </div>

    </>
  );

}
export default App

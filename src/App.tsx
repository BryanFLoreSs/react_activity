
import { useState } from 'react';
import './App.css'


function App() {
  const [count, SetCount] = useState(0);
  return (
    <>
    <h1>Hello Counter</h1>
    <div>
      <button id="decrement" onClick={() => SetCount(count - 1)} style={{marginRight: "10px",backgroundColor: "lightgray", border: "1px solid #2cca37", marginLeft: "10px"}}>
        -
      </button>
      <span> {count} </span>
      <button id="increment" onClick={() => SetCount(count + 1)} style={{marginRight: "10px",backgroundColor: "lightgray", border: "1px solid #ccc", marginLeft: "10px"}}>
        +
      </button>
    </div>

    </>
  );

}
export default App

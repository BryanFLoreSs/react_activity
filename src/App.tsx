
import { useState } from 'react';
import './App.css'


function App() {
  const [count, SetCount] = useState(0);
  return (
    <>
    <h1>Hello Counter</h1>
    <div>
      <button id="decrement" onClick={() => SetCount(count - 1)} style={{marginRight: "10px",padding: "10px",backgroundColor: "Red", marginLeft: "10px"}}>
        -
      </button>
      <span> {count} </span>
      <button id="increment" onClick={() => SetCount(count + 1)} style={{padding: "10px",marginRight: "10px",backgroundColor:"Green", marginLeft: "10px"}}>
        +
      </button>
    </div>

    </>
  );

}
export default App

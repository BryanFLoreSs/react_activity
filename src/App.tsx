
import { useState } from 'react';
import './App.css'


function App() {
  const [count, SetCount] = useState(0);
  return (
    <>
    <h1>Hello Counter</h1>
    <div>
      <button id="decrement" onClick={() => SetCount(count - 1)}>
        -
      </button>
      <span> {count} </span>
      <button id="increment" onClick={() => SetCount(count + 1)}>
        +
      </button>
    </div>

    </>
  );

}
export default App

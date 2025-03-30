import { useState } from "react";
import "./App.css";

function App() {
  const [step,setStep]=useState(1);
  const [count,setCount]=useState(1);
  return (
    <>
      <div>
        <span>
          <button onClick={()=>{setStep((prev)=>Math.max(0,prev-1))}}>-</button>Step:{step}
        </span>
        <button onClick={()=>{setStep((prev)=>prev+1)}}>+</button>
        <span></span>
      </div>
      <div>
        <span>
          <button onClick={()=>{setCount((prev)=>Math.max(0,prev-step))}}>-</button>Count:{count}
        </span>
        <button onClick={()=>{setCount((prev)=>prev+step)}}>+</button>
        <span></span>
      </div>
      <div>{count} days from today is </div>
    </>
  );
}
export default App;

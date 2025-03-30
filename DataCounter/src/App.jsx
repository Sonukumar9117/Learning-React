import { useState } from "react";
import "./App.css";
function App() {
  const [step,setStep]=useState(1);
  const [count,setCount]=useState(0);
  const date=new Date("March 30 2025");
  const [cacculatedDate, setDates]=useState(date.toDateString());
   
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
          <button onClick={()=>{setCount((prev)=>Math.max(0,prev-step))
          if(true){
            date.setDate(date.getDate()+parseInt(count+step))
            setDates(date.toDateString())
          }
              
          }}>-</button>Count:{count}
        </span>
        <button onClick={
          ()=>{setCount((prev)=>prev+step);
            if(true){
              date.setDate(date.getDate()+parseInt(count+step))
              setDates(date.toDateString())
            }

        }}>+</button>
        <span></span>
      </div>
      <div>{count}  days from today is {cacculatedDate}</div>
    </>
  );
}
export default App;

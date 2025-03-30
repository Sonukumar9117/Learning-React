import { useState } from 'react';
import './App.css';
const data=["Learn React","Apply for jobs", "Invest Your new Income"]
function App(){
  const [step, setStep]=useState(1);
  return (<>
   <div className="steps">
    <div className="numbers">
    <div className={`${step>=1?"active":""}`}>1
      
    </div>
    <div className={`${step>=2?"active":""}`}>2</div>
    <div className={`${step>=3?"active":""}`}>3</div>
    </div>
    <div  className='content'>{`Step ${step}: ${data[step-1]}`}</div>
    <div className='buttons' >
      <button  onClick={()=>setStep(previous=>previous!=1?previous-1:previous)}>Previous</button>
      <button onClick={()=>setStep(previous=>previous!=3?previous+1:previous)}>Next</button>
    </div>
   </div>
  </>)
}
export default App;
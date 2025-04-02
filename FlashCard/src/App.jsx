import { useState } from 'react';
import './App.css'

const questions = [
  { id: 1, q: "Who is the founder of Computer?", a: "Charles Babbage", isClicked: false },
  { id: 2, q: "What does CPU stand for?", a: "Central Processing Unit", isClicked: false },
  { id: 3, q: "What is the capital of France?", a: "Paris", isClicked: false },
  { id: 4, q: "Who developed the theory of relativity?", a: "Albert Einstein", isClicked: false },
  { id: 5, q: "Which planet is known as the Red Planet?", a: "Mars", isClicked: false },
  { id: 6, q: "What is the largest mammal in the world?", a: "Blue Whale", isClicked: false },
  { id: 7, q: "What year did World War II end?", a: "1945", isClicked: false },
  { id: 8, q: "Who wrote 'Hamlet'?", a: "William Shakespeare", isClicked: false },
  { id: 9, q: "What is the square root of 64?", a: "8", isClicked: false },
  { id: 10, q: "What is the longest river in the world?", a: "Nile River", isClicked: false }
];


function Card(props){
  const [quest, setQuest]=useState(props.quest);
  return (
    <>  
     <div className={`card${quest.isClicked}`} onClick={()=>{ setQuest((prev)=>{ 
          return {
          q:prev.q,
          a:prev.a,
          isClicked: ! prev.isClicked
         } }
    )
        }}>
      {quest.isClicked?quest.a:quest.q
      }
     </div>
    </>
  );
}

export default function App(){
  return (<div className="container">
  {
   questions.map((questions)=>(<Card key={questions.id} quest={questions}/>))
  }
  </div>)
}
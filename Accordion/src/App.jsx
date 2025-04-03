
import { useState } from 'react';
import './App.css'
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  },
  {
    title: "What materials are used in the chairs?",
    text:
      "Our chairs are made from high-quality wood, metal, and eco-friendly upholstery to ensure durability and comfort."
  },
  {
    title: "Is there a warranty on the chairs?",
    text:
      "Yes! All our chairs come with a 2-year warranty covering manufacturing defects. Please contact our support for more details."
  },
  {
    title: "Can I customize my chair?",
    text:
      "Absolutely! We offer various customization options, including color, fabric, and leg styles. Check out our customization page for more details."
  },
  {
    title: "How do I clean and maintain my chair?",
    text:
      "Wipe the chair with a damp cloth for regular cleaning. For tougher stains, use a mild soap solution and avoid harsh chemicals."
  },
  {
    title: "Are your chairs suitable for outdoor use?",
    text:
      "Some of our models are designed for outdoor use with weather-resistant materials. Please check the product specifications before purchasing."
  },
  {
    title: "What is the weight capacity of the chairs?",
    text:
      "Our chairs are tested to support up to 250 lbs (113 kg). For heavy-duty options, please explore our reinforced models."
  },
  {
    title: "Do you offer bulk discounts for businesses?",
    text:
      "Yes! We provide special pricing for bulk orders. Contact our sales team for a customized quote."
  }
];

function App() {
  
  return (<><Accordion data={faqs}/></>)
}

export default App
function Accordion({data}){
  const [curOpen, setCurOpen]=useState(null)
  return (
  <div className='accordion'> 
   {
   data.map((ele,i)=><AccordionItem curOpen={curOpen}  onOpen={setCurOpen} key={i} num={i} title={ele.title} text={ele.text}/>)}
  </div>
  );
}

function AccordionItem({num,title,text, curOpen, onOpen}){
  const isOpen=num===curOpen;

  function handleToggle(){
    // setIsOpen((prev)=>!prev)
    onOpen(isOpen?null:num);

  }
  return <div className={`item ${isOpen?"open":""}`} onClick={()=>handleToggle()}>
    <p className='number'>{num<9?`0${num+1}`:num+1}</p>
    <p className='title'>{title}</p>
    <p className='icon'>{isOpen ?"-":'+'}</p>
    {isOpen && <div className='content-box'>{text}</div>}
  </div>
}
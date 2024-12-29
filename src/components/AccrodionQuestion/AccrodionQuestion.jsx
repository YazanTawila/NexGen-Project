
import './AccrodionQuestion.css'
import ButtonIcon from'../../components/ButtonIcon/ButtonIcon';
import { useState } from "react";
import zad from"../../assets/images/zad.svg";
import Naqs from"../../assets/images/naks.svg";
const questions = [
  {
    id: 1,
    question:"How long does it take to complete a web development project?",
    answer:"The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    id: 2,
    question:"Can you handle large-scale mobile app development projects?",
    answer:"The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    id: 3,
    question:"Can you integrate third-party APIs into our mobile app?",
    answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    id: 4,
    question:"How do you ensure cross-platform compatibility for mobile apps?",
    answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    id: 5,
    question:"abc5What is your approach to user experience (UX) design?",
    answer:"The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
];


function QuestionItem({ question, answer, isOpen, onChange }) {
  const Imgicon=isOpen===null ? {zad} :{Naqs}
  return (
    <>
    
    <div className='coun'>
      <div className="hm-question-title">
        <div>
          
        </div>
        <button 
          onClick={() => {
            if (isOpen) return;

            onChange();
          }}
        >
          {question}  <span><ButtonIcon ImgSrc={Imgicon}/></span>
        </button>
        <div className={`hm-question-answer ${isOpen ? "show" : ""}`}>
          {answer}
        </div>
      </div>   
    </div>
     
    </>
  );
}

export default function AccrodionQuestion() {
  const [index, setIndex] = useState(0);
  
  return (
    <div className="hm-Accrodion-Container">
      {questions.length === 0
        ? "empty"
        : questions.map((item, i) => (
            <QuestionItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={index === i}
              onChange={() => {
                setIndex(i);
              }}
            />
          ))}
    </div>
  );
}

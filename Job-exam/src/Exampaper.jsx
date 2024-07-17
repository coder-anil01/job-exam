import React, { useEffect, useState } from 'react';
import Question from './Questions.json';

const Exampaper = () => {
    
    const [Result, setResult] = useState(true);

    const submitExam = () => {
        setResult(false);
    }

    const [time, setTime] = useState(300); // 300 seconds = 5 minutes

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId); // Cleanup interval on component unmount
    }else{
        setResult(false);
    }
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <>
    {Result ? <div className='questionopaper'>
        <div className="timer">{formatTime(time)}</div>
        {Question.map((item, index) => (
        <div key={item.id} className='question-card'>
            <div className="question">{item.id}. {item.question}</div>
                <div className="options">
                    <label><input type="radio" value={item.options[0]} />{item.options[0]}</label>
                    <label><input type="radio" value={item.options[1]} />{item.options[1]}</label>
                    <label><input type="radio" value={item.options[2]} />{item.options[2]}</label>
                    <label><input type="radio" value={item.options[3]} />{item.options[3]}</label>
                </div>
        </div>
        ))}
      <button className='button-submit' onClick={submitExam}>Submit</button>
    </div>
    :
    <div className='exam-result-card'>
        <div className="exam-result-text">you failed in this exam</div>
        <div className="exam-result-text">आप परीक्षा में असफल हो गए</div>
    </div>}
</>
  )
}

export default Exampaper

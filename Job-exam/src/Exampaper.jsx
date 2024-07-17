import React, { useState } from 'react';
import Question from './Questions.json';

const Exampaper = () => {
  return (
    <div className='questionopaper'>
        <div className="timer">5:00</div>
        {Question.map((item, index) => (
        <div key={item.id} className='question-card'>
            <div className="question">{item.id}. {item.question}</div>

            <label><input type="radio" value={item.options[0]}/>{item.options[0]}</label>
            <label><input type="radio" value={item.options[1]}/>{item.options[1]}</label>
            <label><input type="radio" value={item.options[2]}/>{item.options[2]}</label>
            <label><input type="radio" value={item.options[3]}/>{item.options[3]}</label>

        </div>
      ))}
    </div>
  )
}

export default Exampaper

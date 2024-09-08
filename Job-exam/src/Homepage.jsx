import React from 'react'
import { useState } from 'react'
import Exampaper from './Exampaper';

const Homepage = () => {
    const [ExamStart, setExamStart] = useState(true);
    const sartExam = (e)=>{
      e.preventDefault();
      setExamStart(false);
    }

  return (
      <>
      {ExamStart ? 
      <form className="input-form">
        <input type="i'd Number" required placeholder="i'd Number" className='input-field'/>
        <input type="number" required placeholder="Enter Register Number" className='input-field'/>
        <button className='Submt-button' onClick={sartExam}>Submit</button>
      </form>
      : <Exampaper/>}
    </>
  )
}

export default Homepage
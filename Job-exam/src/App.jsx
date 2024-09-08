import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Examfail from './Examfail';


function App() {

  const [ExamStart, setExamStart] = useState(true);
  
  const sartExam = (e)=>{
    e.preventDefault();
    setExamStart(false);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="/codersajan" exact element={<Examfail/>}/>
        </Routes>
    </Router>
    </>
    
  )
}

export default App

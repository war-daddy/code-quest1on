import React from 'react'
import Header from './Header'
import '../styles/Course.css'
function Course() {
  return (
    <div>
        <Header/>
        <div className="sec">
               <div className="para">
               <p >Basic Programming ,Data Structure and Algorithm Course 2022.</p> 
               <button>Choose Batch</button>
               <div className="class">
                <span>Morning Batch</span>
                <br />
                <span>Evening Batch</span>
               </div>
               <div className='contact'>
               <p>✉ sk0674101@gmail.com</p>
               <p>📱 +91 9135215745</p>
               </div>
               </div>
               
        </div>
       
        <div className='decp'>
            <span>500+ problem</span>
            <span>6 Live project</span>
            <span>3 Monthes</span>
            <span>Classroom|Live|Online</span>
        </div>
    </div>
  )
}

export default Course;
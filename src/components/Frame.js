import React from 'react'
import '../styles/Frame.css'
function Frame() {
  return (
    <div>
        <div className="frame">
            <h3>Interview Prep</h3>
            <h5><a href="https://www.interviewbit.com/technical-interview-questions/" rel="noreferrer noopener" target='_blank'>Mega Link</a></h5>
            <ol>
              <li>
               <a href="https://www.interviewbit.com/cloud-computing-interview-questions/" rel="noreferrer noopener" target='_blank'>Cloud Computing</a> 
              </li>
              <li>
                <a href="https://www.interviewbit.com/python-interview-questions/" rel="noreferrer noopener" target='_blank'>Python</a>
              </li>
              <li>
                <a href="https://www.interviewbit.com/java-interview-questions/" rel="noreferrer noopener" target='_blank' >JAVA</a>
              </li>
              <li>
                <a href="https://www.interviewbit.com/cpp-interview-questions/" rel="noreferrer noopener" target='_blank' >C++</a>
              </li>
              <li>
                <a href="https://github.com/sudheerj/reactjs-interview-questions" rel="noreferrer noopener" target='_blank' >React Js</a>
              </li>
            </ol>
        </div>
    </div>
  )
}

export default Frame
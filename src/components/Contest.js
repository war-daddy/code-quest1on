import '../styles/Contest.css';
import React from 'react';
import Codeforces from './Codeforces';


function Contest() {
  
  return(
   <div className='contest'>
        <h2>Practice Intermediate Coding</h2>
        <ol className='category'>
          <li style={{color:'red' ,fontSize:'20px'}}>
            <a href="https://earthshakira.github.io/a2oj-clientside/server/Ladders.html" rel="noreferrer noopener" target='_blank'>
            Codeforces
            </a>
           
          </li>
            
          <li style={{color:'green',fontSize:'20px'}}>
            <a href="https://www.codechef.com/practice?end_rating=5000&group=unattempted&hints=0&itm_campaign=practice&itm_medium=navmenu&limit=20&page=0&search=&sort_by=difficulty_rating&sort_order=asc&start_rating=0&tags=&topic=Basic%20Programming&video_editorial=0&wa_enabled=0"
            rel="noreferrer noopener" target='_blank'>Codechef</a>
           </li>
          
          <li style={{color:'black',fontSize:'20px'}}>
            <a href="https://leetcode.com/problem-list/top-interview-questions/"
            rel="noreferrer noopener" target='_blank'>
            Leetcode  </a> 
                   
          </li>
          
        </ol>
        <h2>Important Contests to attempt</h2>
         <div className="box">
         <Codeforces/>
         </div>
    </div>
  )
}

export default Contest
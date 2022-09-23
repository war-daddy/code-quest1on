
import '../styles/Contest.css';
import React, { useEffect, useState } from 'react';
import Chef from './Chef';
function Codeforces() {
    const[codeforces,setCodeforces] = useState([]);
    useEffect(()=>{
      fetch("https://kontests.net/api/v1/codeforces")
      .then((response) => response.json())
      .then((data) => setCodeforces(data));
    },[])
    
    return (
      
      <div className='contest'>
       {
        codeforces.map((item)=>{
          return(<>
          <table >
              <tr>
                <th><a href="https://codeforces.com" rel="noreferrer noopener" target='_blank'  style={{color:'red'}} >{item.name}</a></th>
                <th>{item.start_time}</th>
                <th>{item.end_time}</th>
              </tr>
            </table>
          
          </>)
        })
       
       }
       <Chef/>

        </div>)
}

export default Codeforces;
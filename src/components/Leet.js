import React from 'react'
import { useState,useEffect } from 'react'

function Leet() {
    const [leet,setLeet]  = useState([]);
    useEffect(()=>{
        fetch("https://kontests.net/api/v1/leet_code")
        .then((response) => response.json())
        .then((data) => setLeet(data));
      },[])
  return (
    <div>
    {
        leet.map((item)=>{
          return(<>
          <table >
              <tr>
                <th><a href="https://leetcode.com" rel="noreferrer noopener" target='_blank' style={{color:'orange'}}>{item.name}</a></th>
                <th>{item.start_time}</th>
                <th>{item.end_time}</th>
              </tr>
            </table>
          </>)
        })
       }


    </div>
  )
}

export default Leet
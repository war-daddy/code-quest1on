import React, { useEffect, useState } from 'react';
import '../styles/Contest.css';
import Leet from './Leet';
export default function Chef(props){
    const[chef,setChef] = useState([]);
    useEffect(()=>{
      fetch("https://kontests.net/api/v1/code_chef")
      .then((response) => response.json())
      .then((data) => setChef(data));
    },[])
    return(<div>
      {
        chef.map((item)=>{
          return(<>
          <table >
              <tr>
                <th><a href="https://codechef.com" rel="noreferrer noopener" target='_blank' style={{color:'green'}}>{item.name}</a></th>
                <th>{item.start_time}</th>
                <th>{item.end_time}</th>
              </tr>
            </table>
          </>)
        })
       }
       <Leet/>
  
    </div>);
  }
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import signInWithGoogle from '../firebase.js'
import {auth} from '../firebase.js';

function Header() {
  const [user,setUser] = useState(null);
   useEffect(()=>{
    auth.onAuthStateChanged(async (user) =>{
      setUser(user);
      console.log(user);
    })
   },[]);
   const  signOut = () =>{
    auth.signOut().then(()=>{
      setUser(null);
    })
   }
  return (
    <div className='nav'>
      <div className="logo">
       <Link to='/'> ❔Questions  </Link> 
      </div>
      <ol className='navol'>
        <li><a href="https://cses.fi/problemset/" rel="noreferrer noopener" target='_blank'>Problemset</a></li>
        <li><Link to="/course" >Course</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <div className='auth'>
        { user === null?
         (<div onClick={signInWithGoogle} className='google'>
       
        <button className='in'>  Log in</button></div>):
        (
        <div className='logout' onClick={signOut}>
          <img src={user.photoURL} alt="profile" height='30' width='30' />
          <p className='name'>{user.email}</p>
          <button className='out'>Log out</button>
          </div>
        )
         } 
        </div>
      </ol>

    </div>
  )
}

export default Header
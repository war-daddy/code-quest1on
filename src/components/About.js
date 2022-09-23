import React from 'react';
import '../styles/About.css';
import Header from './Header'
function About() {
  return (
    <>
     <Header/>
        <div className='about'>
       
        <h1  className='topabout'>About</h1>
        <p>
            <h3>We Are</h3>
            <h1>Questions</h1>
            <h1>Team</h1>
        </p>
        <div className='social'>
            <h1>Facebook</h1>
            <h1>Instagram</h1>
            <h1>Twitter</h1>
        </div>
    </div>

    </>
  )
}

export default About
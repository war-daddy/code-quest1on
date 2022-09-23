import React from 'react'
import '../styles/Footer.css'
import Header from './Header.js';
function Profile() {
  return (
    <div className='footer'>
         <Header/>
     <div className="details">
        <img src="https://picsum.photos/200/300" alt="logo" />
        <h3>Created by Sachin Kumar</h3>
     </div>
    </div>
  )
}

export default Profile;
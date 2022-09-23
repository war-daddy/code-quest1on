import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Course from './components/Course';
import About from './components/About';
import Profile from './components/Profile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
     <Route path='/' element= {<App />}/>
     <Route path='/course' element={<Course/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/profile' element={<Profile/>}/>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

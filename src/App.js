
import Header from './components/Header';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Section from './components/Section';
import Frame from './components/Frame';
import Contest from './components/Contest';
import Video from './components/Video';

function App() {
  return (
    
      <div className="App" >
      <Header/>
      <div className='sub'>
      <Main/>
      <Video/>
      <Contest/>
      </div>
      <Section/>
      <Frame/>
      <Footer/>
    </div>
   
  );
}

export default App;

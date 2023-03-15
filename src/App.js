/* eslint-disable react/style-prop-object */

//import About from './AboutUs';

import './App.css';
import Nb from './NavBar';
import TextForm from './TextForm';
import React,{ useState } from 'react';


function App() {
  const [mode,setMode]= useState('light');
  const myText=document.getElementById("exampleFormControlTextarea1");
  const toggleMode = () => {
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#000d2b';
    document.body.style.color='white';
    myText.style.backgroundColor = '#70728c'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'; 
      document.body.style.color='black'; 
      myText.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    <Nb title="EasY Text Editor" mode={mode} toggleMode={toggleMode}/>
    <div>
    <h1 className='container'>Enter Text Here</h1>
    <TextForm/>
    </div>
    
    </>
  );

}

export default App;



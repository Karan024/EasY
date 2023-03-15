import React from 'react'
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { propTypes } from 'prop-types';


export default function TextForm(props) {
    const handleupclick = ()=>{
        
        let newText=text.toUpperCase();
        
        setText(newText);
    }
      const handleloclick = ()=>{
        
        let newText=text.toLocaleLowerCase();
        
        setText(newText);
    }
      const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
      const handleclclick = ()=>{
        
        let newText=('');
        
        setText(newText);
    }

        const handleOnchange = (event) =>{
            setText(event.target.value);


        }
        const[text,setText]=useState('');
    
  return (
    <>
<div className="container">
  <label for="exampleFormControlTextarea1" class="form-label"></label>
 
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnchange}  placeholder='Enter Text'  rows="9"></textarea>
  
    <button type="button" className="btn btn-primary mx-2 my-2"onClick={handleloclick}>LowerCase</button>
    <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleupclick}>UpperCase</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    <button type="button" className="btn btn-danger mx-2 my-2" onClick={handleclclick}>Clear</button>
</div>
    </>
  );
}



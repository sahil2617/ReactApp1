import './App.css';
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import React, { useState } from 'react'


function App() {
    const[mode,setMode] = useState('dark')
    if (mode === 'dark') {
      document.body.style.backgroundColor = '#031023';
  }
  //  When the user will click on the switch which is on the navbar, this function will executes. This function is being sent as a props to the navbar so that when onclick() will fired it will jump to toggleMode().
    const toggleMode = ()=> {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#031023';
        }
        else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
        }
    }
    return (
      <>
      <Navbar title ='Sahil.react' toggleMode = {toggleMode} mode = {mode}/>
        <Form title = 'Enter the text to convert' mode = {mode} />
        
      </>
    );
    
  }
  


export default App;
 

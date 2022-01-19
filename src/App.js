import './App.css';
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import React, { useState } from 'react'
import Alert from './Components/Alert';
// import About from './Components/About';
// import {  BrowserRouter as Router,  Routes,  Route,  Link } from "react-router-dom";


function App() {
  // Alert toggling starts here 
          const [alert, setAlert] = useState(null);
          const fireAlert = (message,type)=>{
            setAlert({
              message : message,
              type : type
            })
            setTimeout(()=>{
              setAlert(null)
            }, 1500)
          }

  // Theme toggling
  
          const[mode,setMode] = useState('dark')
          if (mode === 'dark') {
            document.body.style.backgroundColor = '#031023';
            }
        //  When the user will click on the switch which is on the navbar, this function will executes. This function is being sent as a props to the navbar so that when onclick() will fired it will jump to toggleMode().
          const toggleMode = ()=> {
              if (mode === 'light') {
                  setMode('dark');
                  document.body.style.backgroundColor = '#031023';
                  fireAlert('Dark Mode has been enabled','primary');
              }
              else{
                setMode('light');
                document.body.style.backgroundColor = 'white';
                fireAlert('Light Mode has been enabled','info');
              }
          }
          // theme toggling ends here
          const[title,setTitle] = useState('')
          const dynamicTitle = (title)=>{
              setTitle(title);
              document.title = title;
          }
  
    return (
      <>
      {/* <Router> */}

      <Navbar title ='Sahil.react' toggleMode = {toggleMode}  mode = {mode}/>
      <Alert alert = {alert} />

      {/* <Routes> */}
          {/* <Route  path='/about' element = {<About dynamicTitle ={dynamicTitle} />} /> */}
              
          
          {/* <Route  path = '/'  */}
          <Form title = 'Enter the text to convert into' mode = {mode} dynamicTitle = {dynamicTitle} fireAlert = {fireAlert} />
          {/* /> */}
               
      {/* </Routes> */}

      {/* </Router> */}
      </>
    );
    
  }
  


export default App;
 

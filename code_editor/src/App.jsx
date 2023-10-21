import { useState } from 'react'
import './App.css';
import Editor from '@monaco-editor/react';
import Axios from 'axios';
import Navbar from './Components/Navbar'

function App() {

  const [userCode,setUserCode]=useState(``);
  const [userLang,setUserLang]=useState('python');
  const [userTheme,setUserTheme]=useState("vs-dark");
  const [fontSize,setFontSize]=useState(20);
  const [userInput,setUserInput]=useState("");
  const [userOutput,setUserOutput]=useState("");

  const [loading,setLoading]=useState(false);

  const options={
    fontSize:fontSize
  }

  function compile(){
    setLoading(true);
    if(userCode===``){
      return
    }
  }

  Axios.post(`http://localhost:8000/compile`,{
    code:userCode,
    language:userLang,
    input:userInput
  }).then((res)=>{
    setUserOutput(res.data.userOutput)
  }).then(()=>{
    setLoading(false);
  })

  function clearOutput(){
    setUserOutput("");
  }
  
  return (
    <div className="App">
      <Navbar
        userLang={userLang} setUserLang={setUserLang}
        userTheme={userTheme} setUserTheme={setUserTheme}
        fontSize={fontSize} setFontSize={setFontSize}
      />

    </div>
     
   
  )
}

export default App

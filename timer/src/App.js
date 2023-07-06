import {useEffect, useState} from 'react'
import './App.css'
function App() {
  
  const[time,setTime] = useState(0);

  function handleKeyDown(event){
      if(event.key === 'Enter'){
        const inputTime = Math.floor(event.target.value);
        if(isNaN(inputTime)){
          setTime(0)
        }else{
          setTime(inputTime)
        }
      }
  }

  useEffect(()=>{
      let intervalID;
      if(time > 0){
        intervalID = setInterval(()=>{
          setTime((prevTime)=> prevTime - 1)
        },1000)
      }else{
        setTime(0);
      }
      return ()=> clearInterval(intervalID);
  },[time])

  return (
    <div id='container'>
      <h1>Countdown Timer</h1>
      <h4>Enter the starting time in seconds</h4>
      <input id='timecount' onKeyDown={handleKeyDown} />
      <div id='currentTime'>Time : {time}</div>
    </div>
  ); 
}

export default App;

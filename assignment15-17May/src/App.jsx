import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setState]=useState(0)
  let Plus=(c)=>{
    count++
    setState(count)
  }
  let Minus=(c)=>{
    count--
    setState(count)
  }
  let Zero=(c)=>{
    count=0

    setState(count)
  }

  return (
    <>
    <h2 style={{fontFamily:'cursive', textDecoration:'underline'}}>Assignment</h2>
    <div style={{border:'2px solid black', height:'300px',width:'300px',padding:'30px',backgroundColor:'grey'}}>
    <h2 style={{color:'black', fontFamily:'cursive'}}>Counter App</h2>

    <p style={{fontSize:'35px',fontWeight:'bold',color:'rgb(10,10,80)'}}>{count}</p>

      <button onClick={Plus} style={{ border:'2px solid black', fontSize:'20px',width:'70px',borderRadius:'50%',backgroundColor:'rgb(10,20,90)',color:'white',fontWeight:'900',margin:'12px',height:'70px',textAlign:'center'}}>+</button>

      <button onClick={Minus}  style={{ border:'2px solid black', fontSize:'20px',borderRadius:'50%',backgroundColor:'rgb(10,20,90)',color:'white',fontWeight:'900',margin:'12px',height:'70px', width:'70px',textAlign:'center'}}>-</button>

      <button onClick={Zero} style={{ border:'2px solid black', fontSize:'20px',borderRadius:'50%',backgroundColor:'rgb(10,20,90)',color:'white',fontWeight:'690',margin:'12px',height:'70px', width:'70px',textAlign:'center'}}>0</button>
      </div>
    </>
  )
}

export default App
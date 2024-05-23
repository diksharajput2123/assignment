import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { IncreaseBy10, Increment,Decrement } from './redux/counter'
import { Increment,Decrement } from './redux/counter'
function Counter() {
    let count=useSelector((state)=>state.counter.value)    
    let dispatch=useDispatch() 
  return (
    <div style={{backgroundColor:'greenyellow',border:'2px solid',width:'500px',height:'500px'}}>
    <br/> <h2 style={{fontFamily:'cursive', textDecoration:'underline'}}>Assignment 19</h2><br/>
    <h3 style={{fontFamily:'cursive'}}>Counter App</h3><br></br>
        <button onClick={()=>dispatch(Increment()) }style={{fontSize:"20px"}}>Increment</button>
       
         {/* <button onClick={() => dispatch(IncreaseBy10(10))}>
            Increment by 10
        </button> */}
        <p style={{fontSize:"20px"}}>{count}</p> 
        <button onClick={()=>dispatch(Decrement())} style={{fontSize:"20px"}}>Decrement</button>
    </div>
  )
}

export default Counter
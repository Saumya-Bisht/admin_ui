import React, { useState } from 'react'

function Task() {
    let[inputval,setInputVal]=useState("")
    // let[buttonval,setButtonValue]=useState("")
    let[color,setColor]=useState("black")

    
    // const showText=(e)=>{
    //     setButtonValue(inputval)

    // }
    const changeColor=(e)=>{
        setColor(e.target.value)
    }
  return (
    <div>
        <h1>Task</h1>
        <input style={{color:color}}  onChange={(e)=>{setInputVal(e.target.value)}} type='text' placeholder='start typing'/>
        {/* <button onClick={showText}>Show Text</button> */}
        <select onChange={changeColor}>
            <option value="black">black</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="orange">orange</option>
        </select>
        <p>{inputval.length}</p>
    </div>
  )
}

export default Task
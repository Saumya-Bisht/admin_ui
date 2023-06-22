import React, { useEffect, useState } from 'react'

function Task2() {
    let[profile,setProfile]=useState([])
    let[gen,setGen]=useState("")
    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=100").then((res)=>res.json()).then((data)=>setProfile(data.results))
    },[])
    
    const handlegender=(e)=>{
        setGen(e.target.value)
    }
    // const filteredarr=profile.filter((ele))
  return (
    <div>
        <h1>Task</h1>
        <p>Filter through Gender</p>
        <select value={gen} onChange={handlegender}>
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <table>
            <tr>
                <th>Name</th>
                <th>Gender</th>
            </tr>
            {
                profile.map((ele)=>{
                    if(gen==""){
                        return <tr>
                             <td>
                    {ele.name.first}
                </td>
                <td>
                    {ele.gender}
                </td>
                        </tr>
                    }
                }
                )
            }
            {/* {profile.map((ele)=>{
                return <tr>
                <td>
                    {ele.name.first}
                </td>
                <td>
                    {ele.gender}
                </td>
                
            </tr>
            })} */}
            
        </table>
    </div>
  )
}

export default Task2
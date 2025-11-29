import React, { useState, useEffect } from 'react';
function Proj1(){
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        const timerID=setInterval(()=>{
            setTime(new Date());
        },1000);
        return()=>{
            clearInterval(timerID);
        };
    },[]);
    return(
        <div style={{textAlign:'center',marginTop:'20%'}}>
            <h1>Current Time</h1>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
}
export default Proj1;

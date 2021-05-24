import React,{useState} from 'react'

const Form1=()=>{
const [value,setValue]=useState("");
    const inputevent=(e)=>{
setValue(e.target.value);
        console.log(e.target.value);
    }
return(
    <>
    <h1>hello {value}</h1>
<input type="text" placeholder="Enter your name" onChange={inputevent}></input>
<button className="btn btn-primary" >Clcik here</button>
    </>
);

}

export default Form1;
import React,{useEffect,useState} from  'react'

const UseEffectDemo=()=>{
    const [num, setNum] = useState(0)
    const [num1, setNum1] = useState(0)
useEffect(() => {
document.title=`hello ${num}`;
    return () => {
        // cleanup
    }
},[num] );
return(
    <>
<h1> Hello </h1>
<h1> value is {num}::{num1}</h1>
<button onClick={()=>setNum(num+1)}> click </button>
<button onClick={()=>setNum1(num1+1)}> clickNew </button>
    </>
);

}

export default UseEffectDemo;
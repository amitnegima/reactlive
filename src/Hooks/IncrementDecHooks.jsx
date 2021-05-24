import React,{useState} from 'react';

const IncrementDecrement=()=>{

    const [val,setval]=useState(0);
    const [cc,setColor]=useState('yellow');
    const [date,setDate]=useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setDate(new Date().toLocaleTimeString());
    }, 1000);
return (
<>

<h1 style={{background:cc}}> Current value is {val} and current time is {date}</h1>

<button type="button" className="btn btn-primary" onClick={()=>setval(val+1)}>++</button>
<button type="button" className="btn btn-success" onClick={()=>setval(val-1)}>--</button>
<button type="button" className="btn btn-info" onClick={()=>setDate(new Date().toLocaleTimeString())}>Get Time </button>
<button type="button" class="btn btn-dark" onClick={()=>setColor('pink')}>Change Color</button>

</>

);

}

export default  IncrementDecrement;

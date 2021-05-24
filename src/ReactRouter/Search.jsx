import React,{useState} from 'react';
import SInput from './SInput'
const Search=()=>{
   const inputEvent=(e)=>{

    const data=e.target.value;
    setstate(data);
    console.log(data);
   }
const [state, setstate] = useState("")
    return (
<>
<input type="text" placeholder="Search" value={state} onChange={inputEvent}/>
 {state!=""?<SInput name={state}/>:""}
</>

    )
}

export default Search;
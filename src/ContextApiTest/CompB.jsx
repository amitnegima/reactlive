import React, { useContext } from 'react'
import CompC from './CompC';
import {name,lname,mname,qualification} from './CompA'

//create context
//provider
//Consumer
const CompB=(prop)=>{
    const fname=useContext(name);
    const lnames=useContext(lname);
    const mnames=useContext(mname);
    const quai=useContext(qualification);
    return(
    <><h1>hello  from CompB {prop.info} {fname} {mnames} {lnames} {quai}</h1>
     {/* <CompC data={prop}></CompC> */}
     <CompC info={prop.info}/>
     </>);

}

export default CompB;
import React,{useContext} from 'react'
import {name,lname,mname,qualification} from './CompA'
//name=useContext();
//create context
//provider
//Consumer
const CompD=(prop)=>{
    const fname=useContext(name);
    const lnames=useContext(lname);
    const mnames=useContext(mname);
    const quai=useContext(qualification);
    return(
    <>
    <h1> from Compd {fname}{mnames}{lnames}{quai}</h1>
</>)}


export default CompD;

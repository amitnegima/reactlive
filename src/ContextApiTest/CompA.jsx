import React, { createContext } from 'react'
import CompB from './CompB'

var name=createContext();
var lname=createContext();
var mname=createContext();
var qualification=createContext();

//create context
//provider
//Consumer
const CompA=()=>{
    return(
    <><h1>hello from CompA</h1>
    {/* <CompB data="hello"></CompB> */}
    <name.Provider value="Amit">
    <lname.Provider value="Negi">
    <mname.Provider value="Singh">
    <qualification.Provider value="MCA">
    <CompB info="abc"/>
    </qualification.Provider>
    </mname.Provider>
  
    </lname.Provider>
   
    </name.Provider>
    </>);

}

export default CompA;
export {name,lname,mname,qualification};
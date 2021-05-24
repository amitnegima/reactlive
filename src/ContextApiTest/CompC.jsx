import React from 'react'
import CompD from './CompD';
import {name,lname,mname,qualification} from './CompA'
//name=useContext();
//create context
//provider
//Consumer
const CompC=(prop)=>{
    console.log("value is ");
    console.log(prop);
    console.log(prop.info.info)
   
    return(
    <>

   
    <name.Consumer>{(value)=>{
       return (<lname.Consumer>
           {(lname)=>{
return  <mname.Consumer>{(mname)=>{
  return  (<qualification.Consumer>{((quai)=>{
        return <h1>hello  from CompC  {prop.info} ::{value} {mname} {lname} {quai}</h1>;
    })}</qualification.Consumer>)

}}
  
</mname.Consumer>
//<h1>hello  from CompC  {prop.info} ::{value} {lname}</h1>;
           }}
       </lname.Consumer>)
      

    }}</name.Consumer>
    <CompD/>
  
    </>);

}

export default CompC;
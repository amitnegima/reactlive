import React,{useState} from 'react'

const Form2=()=>{

    const [name,setName]=useState({
 fname:"",
 lname:"",
 email:"",
 PhNo:""

    });
    // const [firstName,setValue]=useState(""); 
    // const [LastName,setLastNameValue]=useState("");
    // const [Email,setEmailValue]=useState("");
    // const [FullName,setFullNameValue]=useState("");
  const inputevent=(e)=>{
    //   var obj={
    //     fname:"",
    //     lname:"",
    //     email:"",
    //     PhNo:"",

    //   };

      setName((prev)=>{
return{
   ...prev,
   [e.target.name]:e.target.value,
};

      });
    //setValue(e.target.value);
        console.log(e.target.name);
        // if(e.target.name=="FirstName")
        // {
        //     obj.fname=e.target.value;
        //     obj.lname=name.lname;
        //     obj.email=name.email;
        //     setName(obj);
        // }
        // else if(e.target.name=="LastName")
        // {
        //     obj.fname=name.fname;
        //     obj.lname=e.target.value;
        //     obj.email=name.email;
        //     setName(obj);
        // }
        // else if(e.target.name=="Email")
        // {   obj.fname=name.fname;
        //     obj.lname=name.lname;
        //     obj.email=e.target.value;
        //     setName(obj);
        // }
        // setName((prev)=>{
        //     if(e.target.name=="FirstName")
        //      {
        //          return{
        //             fname:e.target.value,
        //             lname:prev.lname,
        //             email:prev.email,
        //          };
        //     }
        //     if(e.target.name=="LastName")
        //      {
        //          return{
        //             fname:prev.fname,
        //             lname:e.target.value,
        //             email:prev.email,
        //          };
        //     }
        //     if(e.target.name=="Email")
        //      {
        //          return{
        //          fname:prev.fname,
        //           lname:prev.lname,
        //           email:e.target.value
        //          };
        //     }
        //     if(e.target.name=="PhNo")
        //      {
        //          return{
        //           fname:prev.fname,
        //           lname:prev.lname,
        //           email:prev.email,
        //           PhNo:e.target.value,
        //          };
        //     }
        
        // }
        
        // );
        
    }
    const submitEvent=(e)=>{
        e.preventDefault();
        //setFullNameValue(firstName+""+LastName);
     
            }
return(
<>
<form onSubmit={submitEvent}>
<div>
<h1>hello Mr {name.fname}  {name.lname}  {name.email} {name.PhNo}</h1>
<input type="text" name="fname" placeholder="Enter your  FirstName" onChange={inputevent} value={name.fname}/>
<input type="text"  name="lname" placeholder="Enter your LAstNAme" onChange={inputevent} value={name.lname}/>
<input type="text" name="email" placeholder="Enter your Email" onChange={inputevent} value={name.email}/>
<input type="number" name="PhNo" placeholder="Enter your PhoneNo" onChange={inputevent} value={name.PhNo}/>
<button type="submit" onClick={submitEvent}>Clcik here</button>
</div>
</form>
</>

);

}

export default Form2;
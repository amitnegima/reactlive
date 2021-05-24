import React from 'react'
import {useParams,useLocation,useHistory} from 'react-router-dom'
const User=({match})=>{

const {name,lname}=useParams();
const loc=useLocation();
const history=useHistory();
console.log(loc);
console.log(loc.pathname);
console.log(history);
    return (<>
    <h1> I am users {match.params.name}  {match.params.lname}</h1>
    <h1>NAme form useParams is {name}  {lname}</h1>
    <h1>My current location is {loc.pathname}</h1>
    {
        
        loc.pathname===`/User/amit/negi`?<button onClick={()=>history.push("/")}>geback</button>:null
    }
    </>)
}

export default User;


        {/* loc.pathname===`/User/amit/negi`?<button onClick={()=>history.goBack()}>geback</button>:null */}
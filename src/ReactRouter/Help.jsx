import React from 'react'
import {useHistory} from 'react-router-dom';

const Error=()=>
{
    const hostory=useHistory();
return (

    <>
    <h1> This is Error Page </h1>
    <button onClick={()=>hostory.goBack()}>Go Back</button>

    </>
)
   
}

export default Error;
 
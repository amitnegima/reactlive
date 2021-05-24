import React from 'react'

const LiteralConstant= (prop)=>{

    let fname="Amit";
    let Lname="Negi"
    return(
<>
<h1>{`my name is ${fname} ${Lname} and i am ${prop.Domain}`}</h1>

</>
    );


}

export default LiteralConstant;
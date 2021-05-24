import React from 'react'

const SInput=(props)=>{
    const url=`https://source.unsplash.com/user/erondu/?${props.name}`;
return(

    <>
<img src={url} alt="Wow Image" width="600"/>
    </>
)

}
export default SInput;
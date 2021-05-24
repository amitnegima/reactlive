import React from 'react';

const ImageComp=(prop)=>{

    return(<>
    <h1 contentEditable="true" style={{textAlign:"center",textTransform:"capitalize"}}> welcome to {prop.title}Photos</h1>
     <img style={{"alignItems":"center"}}src="https://picsum.photos/200/300" alt="Random Photos"/>
     <img style={{"alignItems":"center"}}src="https://picsum.photos/250/300" alt="Random Photos"/>
     <img style={{"alignItems":"center"}}src="https://picsum.photos/300/300" alt="Random Photos"/>
    </>
    
    );

   
}
export default ImageComp;
import React from 'react'
const Top5Netflex=(props)=>{
  console.log("array is ");
  console.log(props.values);
  console.log("array element is ");
  console.log(props.values[0]);
return(
<>

{
  
  props.values.map((element)=>

  <div className="card" style={{width: "18rem"}}>
  <img src={element.ImageUrl} className="card-img-top" alt="..." height="400px" width="262"/>
  <div className="card-body">
    <h5 className="card-title">{element.Name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

  )}



</>

);

}

export default Top5Netflex;
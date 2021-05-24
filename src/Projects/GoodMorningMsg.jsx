import React from 'react';
import * as obj from '../Constants/constt'
const GoodMorning =()=>{
const hour=new Date().getHours();
const diplayMesage= (hour >0 && hour <12) ?"Good morning":((hour =>12&& hour <18)?"Good Evening":"Good Night");
console.log("Total hour is :"+hour)
return (
<>
<h1> {obj.default} {obj.Lname} {obj.fullName()}</h1>
<img src="https://picsum.photos/200/300" className="img-thumbnail" alt="..."></img>
<img src="https://picsum.photos/250/300" className="img-thumbnail" alt="..."></img>
<img src="https://picsum.photos/300/300" className="img-thumbnail" alt="..."></img>
<img src="https://picsum.photos/350/300" className="img-thumbnail" alt="..."></img>

</>

);
}

export default GoodMorning;
import React from 'react';
const Top5 =()=>
{

return(

    <>
     <h1 style={{"fontFamily": "Dancing Script, cursive"}}> Top 5 Mobiles in Market</h1>
   {/* <ul>
     <li >Redmi note 10pro max</li>
     <li >Poco x3 pro</li>
     <li >Realme 7 pro</li>
     <li >Redmi note 10 pro</li>
     <li >Realme 8</li>
   </ul> */}
   <table className="table" >
  <thead className="table-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">CompanyName</th>
      <th scope="col">MobileName</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Xaiomi</td>
      <td>Redmi note 10pro max</td>
      <td>19,000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Poco</td>
      <td>Pococ x3 pro</td>
      <td>19000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Realme</td>
      <td>Realme 7 pro</td>
      <td>19000</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Xiaomi</td>
      <td>Redmi note 10 pro</td>
      <td>17000</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Realme</td>
      <td>Realme 8</td>
      <td>16000</td>
    </tr>
  </tbody>
</table>
    </>
);

}

export default Top5;
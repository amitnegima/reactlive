import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { getDefaultNormalizer } from '@testing-library/dom'


const DropDownApiCall=()=>{
    const [state, setstate] = useState(0)
    const [data,setData]=useState({
summary:"",
temperatureC:"",
    });

    async function getdata()
    {
        const res=await axios.get(`https://localhost:44325/weatherforecast/getbyid/${state}`);
        setData({
            summary:res.data[0].summary,
            temperatureC:res.data[0].temperatureC,
        });
        console.log(res.data[0].summary);
        console.log(res.data[0].temperatureC);

    }
useEffect(() => {
   
    var response=  getdata();
    console.log(response);
    return () => {
        // cleanup
    }
}, [state])
return(
<>
<h1>you have selected {state}</h1>
<h1>Today weather is {data.summary}</h1>
<h1>Today temperatureC is {data.temperatureC} celcious</h1>
<select className="form-select" size="3" aria-label="size 3 select example" value={state} onChange={(e)=>{setstate(e.target.value)}} >
  <option value="0">Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<h1>select value is  {state}</h1>
</>

);


}
export default DropDownApiCall
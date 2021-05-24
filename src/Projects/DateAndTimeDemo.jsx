import react from 'react'


const DateTimeComp=()=>{

const date =new Date().toDateString();
const time =new Date().toLocaleTimeString();

return(

    <>

<h1>Today Date is :{date}</h1>
<h1>Today Time is :{time}</h1>

    </>
);


}

export default DateTimeComp;
import React,{useState} from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
  const   Todo=()=>{
    const classes = useStyles();
const [value, setValue] = useState({
  val:"",
  id:""
})
const [values, AllValue] = useState([])
console.log("Total values are");
console.log(values);

const Delete=(e,id)=>{
  e.preventDefault();
  console.log("id id "+id);
  console.log(values);
  var remainingElement=values.filter(x=>x.id!=id);
  AllValue(remainingElement);
  console.log("obj id value ");
  console.log(remainingElement);
//console.log(remainingElement)

};
    return(<>
    <form onSubmit={(e)=>{e.preventDefault()}}>
<h1>Welcome to Todo List</h1>
<input name="tests" onChange={(e)=>setValue({val:e.target.value,
id:new Date().getTime()+new Date().getMilliseconds()})} value={value.val}/>
   <Button  color="primary" onClick={()=>{
     if(value.val!="")
     {
       
     AllValue([...values,value]);
     setValue({val:""})
   }}}>+</Button > 
   <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={()=>{
     if(value.val!="")
     {
       
     AllValue([...values,value]);setValue({val:""})
   }}}
      >
        Save
      </Button>
{console.log("length is "+AllValue.length)}
   { values.length >0 ? <button className="btn btn-danger" onClick={()=>{AllValue([])}}>Delete All</button>:""}

   </form> 
    {values.map((currentelement)=>{
     
     return( <h1  style={{"fontFamily": "Dancing Script, cursive"}} key={currentelement.id}>{currentelement.val } 
      <button className="btn btn-warning" onClick={(e)=>{Delete(e,currentelement.id)}}>Delete</button></h1>)
    })}
    </>);


const arr=[]=["one","two","Three","Four","five"];

const [one,,,,five]=arr;
console.log(one);
console.log(five);
// const [one,two,three,four,five]=arr;
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);
// console.log(five);

return (
<></>

);
  
}

export default Todo;
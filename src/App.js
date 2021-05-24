import logo from './logo.svg';
import React from 'react'
import './App.css';
import Top5 from './List/Top5Mobile'
import LiteralConstant from './LiteralConstant/RStringConstant'
import DateTimeComp from './Projects/DateAndTimeDemo';
import ImageComp from './ImagesDemo'
import GoodMorning from './Projects/GoodMorningMsg';
import SimpleCalculator from './Calculator/SimpleCalculator'
import Top5Netflex from './TopNetflexSeries/NetflexTop5';
import  Todo from './TodoList/Todo'
import IncrementDecrement from './Hooks/IncrementDecHooks';
import Form1 from './forms/forms1';
import Form2 from './forms/form2';
import ImageGridList from './GridList'
import CompA from './ContextApiTest/CompA';
import UseEffectDemo from './USeEffectTest/useEffectDemo';
import DropDownApiCall from './Projects/DropDownApiCall';
import Home from './ReactRouter/Home'
import Contact from './ReactRouter/Contact'
import User from './ReactRouter/User'
import Search from './ReactRouter/Search'
import  Error from './ReactRouter/Help'
import {Switch,Route} from 'react-router-dom'
import NavBar from './ReactRouter/NavrBar'



function App() {
  
//   const MovieArr= [{
//     Name:"Lost in Space",
//     ImageUrl:"https://wallpapercave.com/wp/wp5271393.jpg",
    
//     },
//     {
//       Name:"Breaking Bad",
//       ImageUrl:"https://wallpapercave.com/wp/wp8463688.jpg",
      
//       },
//     {
//       Name:"Strangers Thing",
//       ImageUrl:"https://wallpapercave.com/wp/wp8490058.jpg",
      

//     },
//   {
// Name:"Dark",
// ImageUrl:"https://wallpapercave.com/wp/wp5136564.jpg",

//   }];
     // console.log(MovieArr);
      //console.log(MovieArr[0]);
  return (
    <>
    <div className="row">
    <NavBar/>
   <Switch> 
    {/* <Home/> */}
    {/* <Contact/> */}
    <Route  exact path='/' component={Top5} />
    <Route  exact path='/Home' component={Home} />
    <Route  exact path='/Contact' component={Contact} />
    <Route  exact path='/Search' component={Search} />
    <Route  path='/User/:name' component={User} />
    {/* <Route  path='/User/:name/:lname' component={User} /> */}
    {/* <Route  path='/User' component={User} /> */}
    <Route   component={Error} />

   </Switch> 
   
    {/* <UseEffectDemo/> */}
    {/* <DropDownApiCall/> */}
    {/* <CompA/> */}
    {/* <ImageGridList/> */}
    {/* <Form2/> */}
    {/* <IncrementDecrement/> */}
    {/* <Todo/> */}
    {/* <Top5Netflex values={MovieArr}/> */}
    {/* <Top5Netflex Name="Lost in Space" ImageUrl="https://wallpapercave.com/wp/wp5271393.jpg"/>
    <Top5Netflex Name="Breaking Bad" ImageUrl="https://wallpapercave.com/wp/wp8463688.jpg"/>
    <Top5Netflex Name="Strangers Thing" ImageUrl=" https://wallpapercave.com/wp/wp8490058.jpg"/>
    */}
    </div>
    {/* <SimpleCalculator/> */}
    {/* <GoodMorning/> */}
{/* <ImageComp title="Random"/> */}

{/* <DateTimeComp/> */}


  {/* <Top5/> */}

  {/* <LiteralConstant Domain="programmer"/> */}
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// const fullName=['Amit','Negi'];
// const biodata=['27',...fullName,'Male'];
// const allData=[...fullName,...biodata];

// const [First,Second]=fullName;
// console.log(fullName);
// console.log(biodata);
// console.log(allData);
// console.log(First);
// console.log(Second);

// const Names={
// fname:"Amit",
// Lname:"Negi",


// };
// const Biodata={

// id:1,
// ...Names,
// Age:"27remo",
// fname:"Sumit",
// }
// console.log(Biodata);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

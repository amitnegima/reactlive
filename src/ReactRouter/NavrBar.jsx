import React from 'react'
import {Link as NavLink} from 'react-router-dom'
import './../App.css';

const NavBar =()=>{
return(
<>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink activeClassName="active_class" className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active_class"  to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  activeClassName="active_class" to="/Help">Help</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  activeClassName="active_class" to="/User/amit">User</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active_class" to="/test">test</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link disabled" href="#" tabindex="-1" activeClassName="active_class" aria-disabled="true">Disabled</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>

);

}

export default NavBar;
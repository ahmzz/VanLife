import React from "react";
import { Outlet,NavLink,Link } from "react-router-dom";
const Header = () => {
  const cssStyle={
    fontWeight:"bold",
    textDecoration:"underline",
    color:"#161616"
  }
  return (
    <header>
      <Link className="site-logo" to="/">
        #VANIFE
      </Link>
      <nav>
        <NavLink style={({isActive})=>isActive?cssStyle:null} to="/about">About</NavLink>
        <NavLink style={({isActive})=>isActive?cssStyle:null} to="/host">Host</NavLink>
        <NavLink style={({isActive})=>isActive?cssStyle:null} to="/vans">Vans</NavLink>
      </nav>
    </header>
  );
};

export default Header;

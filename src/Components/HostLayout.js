import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const HostLayout = () => {
  const activeStyle={
    fontWeight:"bold",
    textDecoration:"underline",
    color:"#161616"
  }
  return (
    <>
      <nav className="host-nav">
        <NavLink end to="/host" style={({isActive})=>isActive?activeStyle:null}>Dashboard</NavLink>
        <NavLink to="reviews" style={({isActive})=>isActive?activeStyle:null}>Reviews</NavLink>
        <NavLink to="vans" style={({isActive})=>isActive?activeStyle:null}>Vans</NavLink>
        <NavLink to="income" style={({isActive})=>isActive?activeStyle:null}>Income</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;

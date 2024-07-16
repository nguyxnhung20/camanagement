import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(props) {
  return (
    <nav className="menu-nav">
      <div className="menu-left">
        <NavLink to="/homePage" className="menu-item">
          VTI ACADEMY
        </NavLink>
        <NavLink to="/homePage" className="menu-item">
          Home
        </NavLink>
        <NavLink to="/carmanagement" className="menu-item">
          Car Management
        </NavLink>
      </div>
      <div className="menu-right">
        <NavLink to="/signup" className="menu-item">
          Sign Up
        </NavLink>
        <NavLink to="/login" className="menu-item">
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Menu;

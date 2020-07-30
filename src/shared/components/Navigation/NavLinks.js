import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import Button from "../FormElements/Button";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/users">ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">ADD PLACE</NavLink>
      </li>
      <li>
        <div className="center">
          <Button inverse>LOGOUT</Button>
        </div>
      </li>
    </ul>
  );
};

export default NavLinks;

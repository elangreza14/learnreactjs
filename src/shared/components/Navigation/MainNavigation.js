import React, { useState } from "react";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/BackDrop";

const MainNavigation = (props) => {
  const [triggerdrawer, setTriggerdrawer] = useState(false);
  const opendrawer = () => {
    setTriggerdrawer(true);
  };
  const closedrawer = () => {
    setTriggerdrawer(false);
  };
  return (
    <React.Fragment>
      {triggerdrawer && <BackDrop onClick={closedrawer} />}
      <SideDrawer show={triggerdrawer}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={opendrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">Your Places</h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;

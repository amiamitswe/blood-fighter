import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div className="header" onClick={props.login}>
      <NavLink className="header__logo" to="/" exact={true}>
        <img
          className="header__logo-img"
          src="https://www.pinclipart.com/picdir/big/104-1048833_blood-donor-logo-png-clipart.png"
          alt="Logo"
        />
      </NavLink>

      <div className="link">
        <NavLink
          to="/"
          className="header__itmes"
          activeClassName="active__item"
          exact
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className="header__itmes"
          activeClassName="active__item"
        >
          About
        </NavLink>
        {props.isLogin ? (
          <NavLink
            to="/Login"
            className="header__itmes"
            activeClassName="active__item"
          >
            Login Out
          </NavLink>
        ) : (
          <NavLink
            to="/Login"
            className="header__itmes"
            activeClassName="active__item"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;

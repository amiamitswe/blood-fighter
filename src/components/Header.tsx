import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props: any) => {
  const navLinkClassName: any = ({ isActive }: { isActive: boolean }) =>
    ["header__items", isActive ? "active__item" : null]
      .filter(Boolean)
      .join(" ");

  return (
    <div className="header" onClick={props.login}>
      <div className="container d-flex flex-between">
        <NavLink className="header__logo" to="/">
          <img
            className="header__logo-img"
            src="https://www.pinclipart.com/picdir/big/104-1048833_blood-donor-logo-png-clipart.png"
            alt="Logo"
          />
        </NavLink>

        <div className="link">
          <NavLink to="/" className={navLinkClassName}>
            Home
          </NavLink>
          <NavLink to="/About" className={navLinkClassName}>
            About
          </NavLink>
          {props.isLogin ? (
            <NavLink to="/Login" className={navLinkClassName}>
              Log Out
            </NavLink>
          ) : (
            <NavLink to="/Login" className={navLinkClassName}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

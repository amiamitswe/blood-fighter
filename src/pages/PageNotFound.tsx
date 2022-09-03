import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/icon-image/error-img.png";
// https://www.freeiconspng.com/uploads/error-icon-15.png

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <h3>404-Page not found</h3>
      <Link className="header__items" to="/">
        Home
      </Link>

      <img className="PageNotFound__img" src={errorImg} alt="error" />
    </div>
  );
};

export default PageNotFound;

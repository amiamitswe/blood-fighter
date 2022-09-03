import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <h3>404-Page not found</h3>
      <Link className="header__items" to="/">
        Home
      </Link>

      <img
        className="PageNotFound__img"
        src="https://www.freeiconspng.com/uploads/error-icon-15.png"
        alt="error"
      />
    </div>
  );
};

export default PageNotFound;

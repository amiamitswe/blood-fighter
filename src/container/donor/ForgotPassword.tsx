import React from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="login-from">
      <div>
        <h2 className="donor__title">
          <span aria-label="Droop" role="img">
            &#128167;
          </span>{" "}
          Forgot Password
          <span aria-label="Droop" role="img">
            &#128167;
          </span>
        </h2>
        <Input type="email" place="Email id" />
        <Input type="submit" setValue="Reset Password" />
      </div>
      <div className="login__help">
        <Link className="login__help-content" to="/Login">
          Tray again
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;

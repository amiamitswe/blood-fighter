import React from "react";
import Input from "../Input";
import { Link } from "react-router-dom";

const Login = (props: any) => {
  return (
    <div className="login-from">
      <div>
        <h2 className="donor__title">
          <span aria-label="Droop" role="img">
            &#128167;
          </span>{" "}
          Donor Login
          <span aria-label="Droop" role="img">
            &#128167;
          </span>
        </h2>
        <Input type="email" place="Email id" />
        <Input type="password" place="Password" />
        <Input type="submit" setValue="Login" />
      </div>

      <div className="login__help">
        <Link className="login__help-content" to="/ForgotPassword">
          Forgot Password
        </Link>
        <Link className="login__help-content" to="/NewDonor">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;

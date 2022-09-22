import React, { useState } from "react";
import Input from "../Input";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = (props: any) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const loginHandler = async (e: any) => {
    e.preventDefault();
    const setting = {
      method: "POST",
      type: "cors",
      headers: {
        // "Content-Type": "text/plain;charset=UTF-8",
        "Content-Type": "application/json",
        // Accept: "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ username, password }),
    };
    try {
      // console.log(setting);

      const response = await fetch(
        (process.env.REACT_APP_API_URL + "/user/login") as string,
        setting
      );
      const data = await response.json();
      if (data?.statusCode === 200) {
        toast.success(data.message);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const notify = () => toast("Wow so easy!");

  return (
    <div className="login-from">
      <form onSubmit={(e) => loginHandler(e)}>
        <h2 className="donor__title">
          <span aria-label="Droop" role="img">
            &#128167;
          </span>{" "}
          Donor Login
          <span aria-label="Droop" role="img">
            &#128167;
          </span>
        </h2>
        <Input
          type="text"
          place="Email or username"
          onChange={(e: string) => setUsername(e)}
        />
        <Input
          type="password"
          place="Password"
          onChange={(e: string) => setPassword(e)}
        />
        <Input type="submit" setValue="Login" />
      </form>

      <button onClick={notify}>Notify!</button>

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

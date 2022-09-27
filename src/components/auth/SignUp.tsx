import React, { useState } from "react";
import Input from "../Input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [cPassword, setCPassword] = useState<string>();

  const navigate = useNavigate();

  const loginHandler = async (e: any) => {
    e.preventDefault();

    const setting = {
      method: "POST",
      type: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    };

    if (password === cPassword) {
      try {
        const response = await fetch(
          (process.env.REACT_APP_API_URL + "/user/signup") as string,
          setting
        );
        const data = await response.json();
        if (data?.hasOwnProperty("message")) {
          toast.success(data.message);

          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          toast.error(data.error);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Password does not match");
    }
  };

  return (
    <div className="login-from">
      <form onSubmit={(e) => loginHandler(e)}>
        <h2 className="donor__title">
          <span aria-label="Droop" role="img">
            &#128167;
          </span>{" "}
          Donor Registration
          <span aria-label="Droop" role="img">
            &#128167;
          </span>
        </h2>
        <Input
          type="email"
          onChange={(e: string) => setEmail(e)}
          place="Email id"
        />
        <Input
          type="text"
          onChange={(e: string) => setUsername(e)}
          place="Username"
        />
        <Input
          type="password"
          onChange={(e: string) => setPassword(e)}
          place="Password"
        />
        <Input
          type="password"
          onChange={(e: string) => setCPassword(e)}
          place="Confirm Password"
        />
        <Input type="submit" setValue="Sign Up" />
      </form>

      <div className="login__help">
        <Link className="login__help-content" to="/Login">
          Already I am a donor
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

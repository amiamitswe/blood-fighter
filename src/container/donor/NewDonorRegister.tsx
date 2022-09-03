import React from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const NewDonor = () => {
  return (
    <div className="login-from">
      <div>
        <h2 className="donor__title">
          <span aria-label="Droop" role="img">
            &#128167;
          </span>{" "}
          Donor Registration
          <span aria-label="Droop" role="img">
            &#128167;
          </span>
        </h2>
        <Input type="email" place="Email id" />
        <Input type="text" place="Username" />
        <Input type="date" />
        <Input type="password" place="Password" />
        <Input type="password" place="Confirm Password" />
        <Input type="submit" setVlue="Sign Up" />
      </div>

      <div className="login__help">
        <Link className="login__help-content" to="/Login">
          Already I am a donor
        </Link>
      </div>
    </div>
  );
};

export default NewDonor;

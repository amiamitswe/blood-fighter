import React from "react";
import { Link } from "react-router-dom";

const SingalDonor = props => {
  return (
    <tr className="donor__list-item">
      <td>{props.id}</td>
      <td>
        <img
          className="donor__image"
          src="https://avatars0.githubusercontent.com/u/30245543?s=400&v=4"
          alt="Donor IMG"
        />
      </td>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.bGroup}</td>
      <td>{props.lastDonateDate}</td>
      <td>{props.isCapableToDonote}</td>
      <td>
        <Link to="/Donor?id=id" className="donor__profile">
          Profile
        </Link>
      </td>
    </tr>
  );
};

export default SingalDonor;

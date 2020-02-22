import React from "react";
import { Link } from "react-router-dom";

const SingalDonor = props => {
  return (
    <tr className="donor__list-item">
      <td data-label="NO">{props.id}</td>
      <td data-label="Image">
        <img
          className="donor__image"
          src="https://avatars0.githubusercontent.com/u/30245543?s=400&v=4"
          alt="Donor IMG"
        />
      </td>
      <td data-label="Name">{props.name}</td>
      <td data-label="Age">{props.age}</td>
      <td data-label="Blood +/-">{props.bGroup}</td>
      <td data-label="Last Donate">{props.lastDonateDate}</td>
      <td data-label="Is capable">{props.isCapableToDonote}</td>
      <td data-label="Profile">
        <Link to="/Donor?id=id" className="donor__profile">
          Profile
        </Link>
      </td>
    </tr>
  );
};

export default SingalDonor;

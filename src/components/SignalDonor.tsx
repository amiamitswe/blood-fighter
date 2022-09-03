import React from "react";
import { Link } from "react-router-dom";
import { dateConvertor } from "../utils/helper";

const SignalDonor = (props: any) => {
  return (
    <tr className="donor__list-item">
      <td data-label="NO">{props.id}</td>
      <td data-label="Image">
        <img className="donor__image" src={props.image} alt="Donor" />
      </td>
      <td data-label="Name">{props.name}</td>
      <td data-label="Age">{props.age}</td>
      <td data-label="Blood +/-">{props.bGroup}</td>
      <td data-label="Last Donate">{dateConvertor(props.lastDonateDate)}</td>
      <td data-label="Is capable">{props.isCapableToDonate ? "yes" : "No"}</td>
      <td data-label="Profile">
        <Link to={`/Donor?id=${props.donorID}`} className="donor__profile">
          Profile
        </Link>
      </td>
    </tr>
  );
};

export default SignalDonor;

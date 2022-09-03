import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { dateConvertor } from "../../utils/helper";

const DonorDetails = () => {
  // @ts-ignore
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const donarId = searchParams.get("id");

  const [donar, setDonar] = useState<any>();

  const fetchDonarDetails = useCallback(async () => {
    try {
      const setting = {
        method: "GET",
        type: "cors",
      };

      const response = await fetch(
        `http://localhost:3300/donar/about/${donarId}`,
        setting
      );
      const data = await response.json();
      setDonar(data?.data);
    } catch (error) {
      console.log(error);
    }
  }, [donarId]);

  useEffect(() => {
    fetchDonarDetails();
  }, [donarId, fetchDonarDetails]);

  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <div className="donor" style={{ fontSize: "250%" }}>
        <div className="donor__info">
          <h2>Name: {donar?.name}</h2>
          <h3>Age: {donar?.age}</h3>

          <p>Location: {donar?.address}</p>
          <p>Date of birth: {dateConvertor(donar?.dob)}</p>
          <p>Last blood Donation: {dateConvertor(donar?.lastDonation)}</p>

          <hr />
          <p>Phone: {donar?.mobile}</p>
          <p>Email: {donar?.email}</p>

          <hr />
          <p>Status: {donar?.status}</p>
          <p>Ready to donate: {donar?.isEligible ? "Yes" : "No"}</p>
        </div>

        <div className="donor__action">
          <img
            className="donor__action--image"
            src={donar?.image}
            alt="Donor IMG"
          />
        </div>
      </div>
    </>
  );
};

export default DonorDetails;

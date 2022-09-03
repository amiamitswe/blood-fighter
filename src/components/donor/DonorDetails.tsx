import React from "react";

const DonorDetails = () => {
  return (
    <div className="donor">
      <div className="donor__info">
        <h2>Name: {"Amit Samadder"}</h2>
        <h3>Age: 24</h3>
      </div>

      <div className="donor__action">
        <img
          className="donor__action--image"
          src="https://avatars0.githubusercontent.com/u/30245543?s=400&v=4"
          alt="Donor IMG"
        />
      </div>
    </div>
  );
};

export default DonorDetails;

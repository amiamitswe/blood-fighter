import React, { useState } from "react";
import SignalDonor from "../SignalDonor";
import Input from "../Input";
import Select from "react-select";

const donar = [
  {
    id: 1,
    image: "https://avatars0.githubusercontent.com/u/30245543?s=400&v=4",
    name: "Amit Samadder",
    age: "24",
    blood: "O+",
    lastDonation: "2022-05-03T10:45:39.470Z",
    isEligible: false,
  },
  {
    id: 2,
    image: "https://avatars0.githubusercontent.com/u/30245543?s=400&v=4",
    name: "Amit Samadder (Abir)",
    age: "23",
    blood: "O+",
    lastDonation: "2022-05-03T10:45:39.470Z",
    isEligible: true,
  },
];

const bloodGroup = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
];

const locations = [
  { value: "Barisal", label: "Barisal" },
  { value: "Chittagong", label: "Chittagong" },
  { value: "Dhaka", label: "Dhaka" },
  { value: "Khulna", label: "Khulna" },
  { value: "Mymensingh", label: "Mymensingh" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Rangpur", label: "Rangpur" },
  { value: "Sylhet", label: "Sylhet" },
];

const DonarHome = (props: any, setSearchName: any) => {
  return (
    <div className="home">
      <div className="donor__list">
        <table>
          <thead>
            <tr>
              <th scope="col">NO</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Blood +/-</th>
              <th scope="col">Last Donate</th>
              <th scope="col">Is capable</th>
              <th scope="col">Profile</th>
            </tr>
          </thead>

          <tbody>
            {(props?.data?.donares || donar)?.map(
              (donar: any, index: number) => (
                <SignalDonor
                  key={donar._id + index.toString()}
                  id={index + 1}
                  image={donar.image}
                  name={donar.name}
                  age={donar.age}
                  bGroup={donar.blood}
                  lastDonateDate={donar.lastDonation}
                  isCapableToDonate={donar.isEligible}
                  donorID={donar._id}
                />
              )
            )}
          </tbody>
        </table>
      </div>

      <div className="donor__filter">
        <Input type="text" place="Mobile No" onChange={setSearchName} />

        <Select
          classNamePrefix="select__input"
          className="select__input"
          // value={this.selectedOption}
          // onChange={this.handleChange}
          options={bloodGroup}
          placeholder="Select Blood Group"
        />

        <Select
          classNamePrefix="select__input"
          className="select__input"
          // value={this.selectedOption}
          // onChange={props.handleChange}
          options={locations}
          placeholder="Select Location"
        />
      </div>
    </div>
  );
};

export default DonarHome;

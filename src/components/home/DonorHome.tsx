import React from "react";
import SignalDonor from "../SignalDonor";
import Input from "../Input";
import Select from "react-select";

const donar = [
  {
    id: 1,
    img: "Img",
    name: "Amit Samadder",
    age: "24",
    bloodGroup: "O+",
    lastDate: "10/10/2019",
    canDonate: "yes",
  },
  {
    id: 2,
    img: "Img",
    name: "Amit Samadder (Abir)",
    age: "23",
    bloodGroup: "O+",
    lastDate: "25/12/2019",
    canDonate: "No",
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

const DonarHome = () => {
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
            {donar.map((a) => (
              <SignalDonor
                key={a.id}
                id={a.id}
                name={a.name}
                age={a.age}
                bGroup={a.bloodGroup}
                lastDonateDate={a.lastDate}
                isCapableToDonate={a.canDonate}
                donorID={a.id}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="donor__filter">
        <Input type="number" place="Mobile No" />

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

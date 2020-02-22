import React, { Component } from "react";

import SingalDonor from "../../components/SingalDonor";
import Input from "../../components/Input";
import Select from "react-select";

class Home extends Component {
  state = {
    donor: [
      {
        id: 1,
        img: "Img",
        name: "Amit Samadder",
        age: "24",
        bloodGroup: "O+",
        lastDate: "10/10/2019",
        canDonote: "yes"
      },
      {
        id: 2,
        img: "Img",
        name: "Amit Samadder (Abir)",
        age: "23",
        bloodGroup: "O+",
        lastDate: "25/12/2019",
        canDonote: "No"
      },
      {
        id: 3,
        img: "Img",
        name: "Amit Samadder",
        age: "24",
        bloodGroup: "O+",
        lastDate: "10/10/2019",
        canDonote: "yes"
      },
      {
        id: 4,
        img: "Img",
        name: "Amit Samadder",
        age: "24",
        bloodGroup: "O+",
        lastDate: "10/10/2019",
        canDonote: "yes"
      },
      {
        id: 5,
        img: "Img",
        name: "Amit Samadder (Abir)",
        age: "23",
        bloodGroup: "O+",
        lastDate: "25/12/2019",
        canDonote: "No"
      },
      {
        id: 6,
        img: "Img",
        name: "Amit Samadder",
        age: "24",
        bloodGroup: "O+",
        lastDate: "10/10/2019",
        canDonote: "yes"
      }
    ],
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  bloodGroup = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" }
  ];

  locations = [
    { value: "Barisal", label: "Barisal" },
    { value: "Chittagong", label: "Chittagong" },
    { value: "Dhaka", label: "Dhaka" },
    { value: "Khulna", label: "Khulna" },
    { value: "Mymensingh", label: "Mymensingh" },
    { value: "Rajshahi", label: "Rajshahi" },
    { value: "Rangpur", label: "Rangpur" },
    { value: "Sylhet", label: "Sylhet" }
  ];

  render() {
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
              {this.state.donor.map(a => (
                <SingalDonor
                  key={a.id}
                  id={a.id}
                  name={a.name}
                  age={a.age}
                  bGroup={a.bloodGroup}
                  lastDonateDate={a.lastDate}
                  isCapableToDonote={a.canDonote}
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
            value={this.selectedOption}
            onChange={this.handleChange}
            options={this.bloodGroup}
            placeholder="Select Blood Group"
          />

          <Select
            classNamePrefix="select__input"
            className="select__input"
            value={this.selectedOption}
            // onChange={props.handleChange}
            options={this.locations}
            placeholder="Select Locaion"
          />
        </div>
      </div>
    );
  }
}

export default Home;

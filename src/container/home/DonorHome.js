import React, {Component} from 'react';

import SingalDonor from '../../components/SingalDonor';
import Input from '../../components/Input';
import Select from 'react-select';


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

 options = [
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' }
  ];
  
  render() {
    return (

      <div className="home">
  
        <div className="donor__list">
          <table>
            <thead>
              <tr>
                <th>NO</th>
                <th>Image</th>
                <th>Name</th>
                <th>Age</th>
                <th>Blood Group</th>
                <th>Last Donate</th>
                <th>Is capable</th>
                <th>Profile</th>
              </tr>
            </thead>
  
            <tbody >
  
              {this.state.donor.map((a) =>
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
              )}
  
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
            options={this.options}
            placeholder="Select Blood Group"
          />
  
  
          <Select
            classNamePrefix="select__input"
            className="select__input"
            value={this.selectedOption}
            // onChange={props.handleChange}
            options={this.options}
            placeholder="Select Locaion"
          />
  
        </div>
      </div>
    );
  }
};

export default Home;
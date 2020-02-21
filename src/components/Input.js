import React from 'react';


const Input = (props) => {
  return (
    <div className="input-fild">
      <input className="input" type={props.type} placeholder={props.place} value={props.setVlue} required/>
      <label className="title">{props.place}</label>
    </div>
  );
}

export default Input;
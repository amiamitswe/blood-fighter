import React from "react";

const Input = (props: any) => {
  return (
    <div className="input-field">
      <input
        className="input"
        type={props.type}
        placeholder={props.place}
        value={props.setValue}
        required
      />
      <label className="title">{props.place}</label>
    </div>
  );
};

export default Input;

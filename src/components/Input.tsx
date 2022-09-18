import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Input = (props: any) => {
  const [inputType, setInputType] = useState<string>("text");
  useEffect(() => {
    setInputType(props.type);
  }, [props.type]);

  const showPasswordHandler = (e: any) => {
    e.preventDefault();
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div className="input-field">
      {props.type === "password" ? (
        <button className="show-password" onClick={showPasswordHandler}>
          <FontAwesomeIcon
            icon={inputType === "password" ? faEye : faEyeSlash}
          />
        </button>
      ) : null}
      <input
        className="input"
        type={inputType}
        placeholder={props.place}
        value={props.setValue}
        onChange={(e) => props.onChange(e.target.value)}
        required
      />
      <label className="title">{props.place}</label>
    </div>
  );
};

export default Input;

import React from "react";
import TextField from "@material-ui/core";

const InputField = ({ label, name, onchange, value }) => {
  return (
    <TextField label={label} name={name} onChange={onchange} value={value} />
  );
};

export default InputField;

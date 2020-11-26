import React from "react";
import { TextField } from "@material-ui/core";

function InputField({ id, inputProps, label, name, onChange, value }) {
  return (
    <TextField
      id={id}
      inputProps={inputProps}
      label={label}
      name={name}
      onChange={onChange}
      type="number"
      value={value}
      variant="outlined"
    />
  );
}

export default InputField;

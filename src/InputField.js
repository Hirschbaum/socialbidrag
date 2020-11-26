import React from "react";
import { TextField } from "@material-ui/core";

function InputField({ id, label, name, onchange, value }) {
  return (
    <TextField
      id={id}
      label={label}
      name={name}
      onChange={onchange}
      type="number"
      value={value}
      variant="outlined"
    />
  );
}

export default InputField;

import React from "react";
import { TextField } from "@material-ui/core";

function InputField({
  defaultValue,
  id,
  inputProps,
  label,
  name,
  onChange,
  value,
}) {
  return (
    <TextField
      defaultValue={defaultValue}
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

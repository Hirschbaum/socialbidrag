import React from "react";
import InputField from "./InputField";
import { Box } from "@material-ui/core";

const FamilyForm = ({ handleKids }) => {
  //add styling here later
  return (
    <Box>
      <InputField
        id="age0"
        inputProps={{
          "data-minage": "0",
          "data-maxage": "0",
          min: "0",
          max: "10",
        }}
        label="0-1 år"
        name="age0-1"
        onChange={handleKids}
        type="number"
        variant="outlined"
      />
      <InputField
        id="age1-2"
        inputProps={{
          "data-minage": "1",
          "data-maxage": "2",
          min: "0",
          max: "10",
        }}
        label="1-2 år"
        name="age1-2"
        onChange={handleKids}
        type="number"
        variant="outlined"
      />
      <InputField
        id="age3"
        inputProps={{
          "data-minage": "3",
          "data-maxage": "3",
          min: "0",
          max: "10",
        }}
        label="3 år"
        name="age3"
        onChange={handleKids}
        type="number"
        variant="outlined"
      />
      <InputField
        id="age4-6"
        inputProps={{
          "data-minage": "4",
          "data-maxage": "6",
          min: "0",
          max: "10",
        }}
        label="4-6 år"
        name="age3"
        onChange={handleKids}
        type="number"
        variant="outlined"
      />
    </Box>
  );
};

export default FamilyForm;

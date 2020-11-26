import React from "react";
import InputField from "./InputField";
import { Box } from "@material-ui/core";

const FamilyForm = ({ handleKids }) => {
  //add styling here later
  return (
    <Box>
      <InputField
        inputProps={{
          "data-minage": "0",
          "data-maxage": "1",
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
        //value={age || ""}
        variant="outlined"
      />
      <InputField
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
        //value={age || ""}
        variant="outlined"
      />
    </Box>
  );
};

export default FamilyForm;

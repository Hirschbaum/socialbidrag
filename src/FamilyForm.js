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
          "data-kidage": "0-1",
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
          "data-kidage": "1-2",
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
          "data-kidage": "3",
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
          "data-kidage": "4-6",
          min: "0",
          max: "10",
        }}
        label="4-6 år"
        name="age4-6"
        onChange={handleKids}
        type="number"
        variant="outlined"
      />
      <InputField
        id="age7-10"
        inputProps={{
          "data-kidage": "7-10",
          min: "0",
          max: "10",
        }}
        label="7-10 år"
        name="age7-10"
        onChange={handleKids}
        type="number"
        variant="outlined"
      />
      <InputField
        id="age11-14"
        inputProps={{
          "data-kidage": "11-14",
          min: "0",
          max: "10",
        }}
        label="11-14 år"
        name="age11-14"
        onChange={handleKids}
        type="number"
        variant="outlined"
      />
      <InputField
        id="age15-18"
        inputProps={{
          "data-kidage": "15-18",
          min: "0",
          max: "10",
        }}
        label="15-18 år"
        name="age15-18"
        onChange={handleKids}
        type="number"
        variant="outlined"
      />
      <InputField
        id="age19-20"
        inputProps={{
          "data-kidage": "19-20",
          min: "0",
          max: "10",
        }}
        label="19-20 år"
        name="age19-20"
        onChange={handleKids}
        type="number"
        variant="outlined"
      />
    </Box>
  );
};

export default FamilyForm;

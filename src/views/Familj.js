import React from "react";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";

const Familj = (props) => {
  const [value, setValue] = React.useState("single");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <Typography variant="h4">Familjeförhållande</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend"></FormLabel>
        <RadioGroup
          aria-label="familyStatus"
          name="familyStatus1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="single"
            control={<Radio />}
            label="jag är ensamstående"
          />
          <FormControlLabel
            value="partner"
            control={<Radio />}
            label="jag är sammanboende (med vuxen)"
          />
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default Familj;

import React, { useState } from "react";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Familj = (props) => {
  const classes = useStyles();
  //---------------------------------------------------
  //----- if single 3150 else 5680 (in case of partner)
  //---------------------------------------------------

  const [status, setStatus] = useState("single"); //family status

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Container>
      <Typography variant="h4">Familjeförhållande</Typography>
      <form className={classes.root} autoComplete="off">
        <FormControl component="fieldset">
          <FormLabel component="legend"></FormLabel>
          <RadioGroup
            aria-label="familyStatus"
            name="familyStatus1"
            value={status}
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

        <Typography variant="body1">
          Fyll i hur många barn bor hos dig:
        </Typography>

        <TextField
          //2170 per capita
          //defaultValue={props.family.age0-1}
          id="age0-1"
          label="0-1 år"
          name="age0-1"
          //onChange={props.familyHandler}
          type="number"
          variant="outlined"
        />
        <TextField
          //2430 per capita
          //defaultValue={props.family.age1-2}
          id="age1-2"
          label="1-2 år"
          name="age1-2"
          //onChange={props.familyHandler}
          type="number"
          variant="outlined"
        />
        <TextField
          //2160 per capita
          //defaultValue={props.family.age3}
          id="age3"
          label="3 år"
          name="age3"
          //onChange={props.familyHandler}
          type="number"
          variant="outlined"
        />

        {/*familyTotal: */}
        {/*if single parent add 3150 else add 5680 */}
        {/*depending on the childs/childrens age add (different) costs to the familyTotal*/}
        {/*to count how many people live in the family */}
        {/*and depending on that number add a sum to familyTotal */}

        <Typography variant="body1">Summa: </Typography>
      </form>
    </Container>
  );
};

export default Familj;

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

  let familyMembersNumber = 1;
  const [status, setStatus] = useState("single"); //family status
  const [kids, setKids] = useState({});

  const handleChange = (e) => {
    setStatus(e.target.value); //family status: single OR partner
  };

  //------------ function to update the number of kids in different age
  function kidsHandler(e) {
    let kidsData = { ...kids, [e.target.name]: e.target.value };
    setKids(kidsData);
  }

  console.log(status, "familyMembersNumber: ", familyMembersNumber, kids);

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
          //defaultValue={kids.age0-1}
          id="age0-1"
          label="0-1 år"
          max="5"
          name="age0-1"
          onChange={kidsHandler}
          type="number"
          variant="outlined"
        />
        <TextField
          //2430 per capita
          //defaultValue={kids.age1-2}
          id="age1-2"
          label="1-2 år"
          max="5"
          name="age1-2"
          onChange={kidsHandler}
          type="number"
          variant="outlined"
        />
        <TextField
          //2160 per capita
          //defaultValue={kids.age3}
          id="age3"
          label="3 år"
          max="5"
          name="age3"
          onChange={kidsHandler}
          type="number"
          variant="outlined"
        />

        {/*familyTotal: */}
        {/*if single parent add 3150 else add 5680 */}
        {/*depending on the childs/childrens age add (different) costs to the familyTotal*/}
        {/*to count how many people live in the family */}
        {/*and depending on that number add a sum to familyTotal */}

        <Typography variant="body1">
          Summa: {status === "partner" ? 5680 : 3150}
        </Typography>
      </form>
    </Container>
  );
};

export default Familj;

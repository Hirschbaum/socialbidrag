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
import { useEffect } from "react";

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
  const [familyMembers, setFamilyMembers] = useState(1);
  const [memberCost, setMemberCost] = useState(1010);
  const [kids, setKids] = useState({});
  const [familyTotal, setFamilyTotal] = useState(0);

  const handleChange = (e) => {
    setStatus(e.target.value); //family status: single OR partner
  };

  //------------ calculate the number of family members
  const handelFamilyMembers = () => {
    let objClone = { ...kids };
    let kidsNumber = Object.values(objClone).reduce(
      (prev, current) => parseInt(prev) + parseInt(current),
      0
    );
    if (status === "partner") {
      setFamilyMembers(kidsNumber + 2);
    } else {
      setFamilyMembers(kidsNumber + 1);
    }
  };

  //------------ to update the number of kids in different age
  const kidsHandler = (e) => {
    let kidsData = { ...kids, [e.target.name]: e.target.value };
    setKids(kidsData);
    addKidsCost();
  };

  //------------- to get the costs depending on the number of family members
  const handelFamilyMemberCost = (num) => {
    if (num === 1) {
      setMemberCost(1010);
    }
    if (num === 2) {
      setMemberCost(1120);
    }
    if (num === 3) {
      setMemberCost(1410);
    }
    if (num === 4) {
      setMemberCost(1600);
    }
    if (num === 5) {
      setMemberCost(1850);
    }
  };

  //------------ to update the costs according to the number of children in different age
  //------------ nice to have: reducer hook
  const addKidsCost = () => {
    let objClone = { ...kids };
    let output = Object.entries(objClone).map(([key, value]) => ({
      [key]: value,
    })); // make the key-value pairs to an array with objects: [{age1-2: "1"}, {age3: "2"}]
    console.log(output);

    //map the kidsArray
    //if (age0-1) {parseInt(age1-2) * 2170} majd add hozzá az összeghez
    //if (age1-2) {parseInt(age1-2) * 2430} majd add hozzá az összeghez
  };

  //------------ here to add all the costs to the familyTotal
  const familyTotalHandler = () => {
    if (status === "single") {
      setFamilyTotal(3150 + memberCost); //add costs depending on the number of family members
    } else {
      setFamilyTotal(5680 + memberCost); //add costs depending on the number of family members
    }
    addKidsCost();

    //add kidsCost
  };

  useEffect(() => {
    familyTotalHandler();
  });

  useEffect(() => {
    handelFamilyMembers();
  });

  useEffect(() => {
    handelFamilyMemberCost(familyMembers);
  });

  console.log(
    status,
    "kids: ",
    kids,
    "family members: ",
    familyMembers,
    "member cost: ",
    memberCost
  );

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

        <Typography variant="body1">Summa: {familyTotal}</Typography>
      </form>
    </Container>
  );
};

export default Familj;

import React from "react";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { reducer, initialState } from "../Reducer";
import { useReducer } from "react";
import FamilyForm from "../FamilyForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Familj2 = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleStatus = (e) => {
    //family status: single OR partner
    dispatch({ type: "SET_STATUS", payload: e.target.value });
  };

  //dispatch(addChild({age: [0-1], amount: e.target.value})) with data-attributes!
  //not working yet
  const handleKids = (e) => {
    dispatch({
      type: "SET_CHILDREN",
      payload: {
        amount: e.target.value,
        age: [
          parseInt(e.target.dataset.minage),
          parseInt(e.target.dataset.maxage),
        ],
      }, //to get the data-attribute from FamilyForm
    });
    console.log(
      e.target.value,
      e.target.dataset.minage,
      e.target.dataset.maxage,
      state.kids
    );
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
            value={state.status}
            onChange={handleStatus}
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
        <FamilyForm handleKids={handleKids} />

        <Typography variant="body1">Summa: {state.sum} </Typography>
      </form>
    </Container>
  );
};

export default Familj2;

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
//import { reducer, initialState } from "../Reducer";
import { useContext } from "react";
import FamilyForm from "../FamilyForm";
import { ExpensesContext } from "../context/ExpensesContext";

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

  const { state, dispatch } = useContext(ExpensesContext);
  const handleStatus = (e) => {
    //family status: single OR partner
    dispatch({ type: "SET_STATUS", payload: e.target.value });
  };

  const handleKids = (e) => {
    dispatch({
      type: "SET_CHILDREN",
      payload: {
        age: e.target.dataset.kidage, //to get the data-attribute from FamilyForm
        amount: parseInt(e.target.value),
      },
    });
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
        <FamilyForm handleKids={handleKids} dispatch={dispatch} state={state} />

        <Typography variant="body1">Summa: {state.familyTotal} </Typography>
      </form>
    </Container>
  );
};

export default Familj2;

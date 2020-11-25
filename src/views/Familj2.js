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
    //setStatus(e.target.value); //family status: single OR partner
    dispatch({ type: "SET_STATUS", payload: e.target.value });
  };

  console.log(state.status);

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
            //onChange={(e) => dispatch({ type: "SET_STATUS" })}
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
      </form>
    </Container>
  );
};

export default Familj2;

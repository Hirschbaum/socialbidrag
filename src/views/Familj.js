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

import { formStyle } from "../Styles/Styles";
import { useContext } from "react";
import FamilyForm from "../components/FamilyForm";
import { FormContext } from "../context/FormContext";

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
  const style = formStyle();

  const { state, dispatch } = useContext(FormContext);
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
    <Container className={style.form_container}>
      <Typography variant="h4" className={style.form_title}>
        Familjeförhållande
      </Typography>
      <form className={classes.root} autoComplete="off">
        <FormControl component="fieldset">
          <FormLabel component="legend"></FormLabel>
          <RadioGroup
            aria-label="familyStatus"
            defaultValue={state.status}
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
        <br />

        <Typography variant="body1" className={style.space_around}>
          Fyll i hur många barn bor hos dig:
        </Typography>
        <FamilyForm handleKids={handleKids} dispatch={dispatch} state={state} />

        <Typography variant="body1" className={style.form_sum}>
          Summa: {state.familyTotal} kr
        </Typography>
      </form>
    </Container>
  );
};

export default Familj;

import React from "react";
import {
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { formStyle } from "../Styles/Styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
}));

const Utgifter = (props) => {
  const classes = useStyles();
  const style = formStyle();

  return (
    <Container className={style.form_container}>
      <Typography variant="h4" className={style.form_title}>
        Utgifter
      </Typography>
      <Typography variant="body1" className={style.form_links}>
        Ange hela hushållets utgifter per månad i respektive ruta. Avrunda till
        hela kronor.
      </Typography>
      <Typography variant="body1" className={style.form_links}>
        Om du inte anger några kostnader räknas de som noll (0).
      </Typography>
      <form className={classes.root} autoComplete="off">
        <div>
          <TextField
            defaultValue={props.expenses.residence}
            id="residence"
            label="Bostad"
            name="residence"
            onChange={props.expensesHandler}
            type="number"
            variant="outlined"
          />
          <TextField
            defaultValue={props.expenses.electricity}
            id="electricity"
            label="Hushållsel"
            name="electricity"
            onChange={props.expensesHandler}
            type="number"
            variant="outlined"
          />
          <TextField
            defaultValue={props.expenses.workTrip}
            id="workTrip"
            label="Arbetsresor"
            name="workTrip"
            onChange={props.expensesHandler}
            type="number"
            variant="outlined"
          />
          <TextField
            defaultValue={props.expenses.homeInsurance}
            id="homeInsurance"
            label="Hemförsäkring"
            name="homeInsurance"
            onChange={props.expensesHandler}
            type="number"
            variant="outlined"
          />
          <TextField
            defaultValue={props.expenses.aKassa}
            id="aKassa"
            label="fackföreningsavgift och a-kassa"
            name="aKassa"
            onChange={props.expensesHandler}
            type="number"
            variant="outlined"
          />
          <Typography variant="body1" className={style.form_sum}>
            Summa: {props.expensesTotal} kr
          </Typography>
        </div>
      </form>
    </Container>
  );
};

export default Utgifter;

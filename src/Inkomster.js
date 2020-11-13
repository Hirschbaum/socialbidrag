import React from "react";
import { Container, TextField, Typography } from "@material-ui/core";
import { incomeStyle } from "./Styles";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
}));

const Inkomster = (props) => {
  const style = incomeStyle();
  const classes = useStyles();

  console.log(props.income, props.incomeTotal); //undefined,undefined
  return (
    <Container>
      <Typography className={style.income_title} variant="h4">
        Börja med att skriva in alla dina inkomster nedan.
      </Typography>
      <Typography variant="body2" className={style.income_text}>
        För att kunna veta om du kan ha behörighet till ekonomiskt bistånd ska
        dina inkomster jämföras med dina utkomster och med din
        familjeförhållande.
      </Typography>
      <br />
      <form className={classes.root} autoComplete="off">
        <div>
          <TextField
            id="salary"
            label="Lön"
            name="salary"
            onChange={props.incomeHandler}
            type="number"
            variant="outlined"
          />
          <TextField
            id="unemployment"
            label="Arbetslöshetsersättning"
            name="unemployment"
            onChange={props.incomeHandler}
            type="number"
            variant="outlined"
          />
          <TextField
            id="sick"
            label="Sjuk- och aktivitetsersättning"
            onChange={props.incomeHandler}
            type="number"
            variant="outlined"
          />
          <TextField
            id="sickleave"
            label="Sjukpenning"
            type="number"
            onChange={props.incomeHandler}
            variant="outlined"
          />
          <TextField
            id="parentalleave"
            label="Föräldrapening"
            type="number"
            onChange={props.incomeHandler}
            variant="outlined"
          />
        </div>
      </form>
      <Typography variant="body1"> Total: {props.incomeTotal} </Typography>{" "}
      {/*Total: {props.incomeTotal} */}
    </Container>
  );
};

export default Inkomster;

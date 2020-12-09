import React from "react";
import { Container, TextField, Typography } from "@material-ui/core";
import { formStyle } from "../Styles/Styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Inkomster = (props) => {
  const style = formStyle();
  const classes = useStyles();

  return (
    <Container className={style.form_Container}>
      <Typography className={style.form_title} variant="h4">
        Börja med att skriva in alla dina inkomster nedan.
      </Typography>
      <Typography variant="body2" className={style.form_text}>
        För att kunna veta om du kan ha behörighet till ekonomiskt bistånd ska
        dina inkomster jämföras med dina utkomster och med din
        familjeförhållande.
      </Typography>
      <br />
      <form className={classes.root} autoComplete="off">
        <div>
          <TextField
            defaultValue={props.income.salary}
            id="salary"
            label="Lön"
            name="salary"
            onChange={props.incomeHandler}
            type="number"
            variant="outlined"
          />
          <TextField
            defaultValue={props.income.unemployment}
            id="unemployment"
            label="Arbetslöshetsersättning"
            name="unemployment"
            onChange={props.incomeHandler}
            type="number"
            variant="outlined"
          />
          <TextField
            defaultValue={props.income.activeLeave}
            id="activeLeave"
            label="Sjuk- och aktivitetsersättning"
            name="activeLeave"
            onChange={props.incomeHandler}
            type="number"
            variant="outlined"
          />
          <TextField
            defaultValue={props.income.sickleave}
            id="sickleave"
            label="Sjukpenning"
            name="sickleave"
            type="number"
            onChange={props.incomeHandler}
            variant="outlined"
          />
          <TextField
            defaultValue={props.income.parentalLeave}
            id="parentalLeave"
            label="Föräldrapening"
            name="parentalLeave"
            type="number"
            onChange={props.incomeHandler}
            variant="outlined"
          />
          <TextField
            defaultValue={props.income.pension}
            id="pension"
            label="Pension"
            name="pension"
            type="number"
            onChange={props.incomeHandler}
            variant="outlined"
          />
          <TextField
            defaultValue={props.income.maintenance}
            id="maintenance"
            label="Underhållsstöd/-bidrag"
            name="maintenance"
            type="number"
            onChange={props.incomeHandler}
            variant="outlined"
          />
          <TextField
            defaultValue={props.income.childAllowance}
            id="childAllowance"
            label="Barnbidrag"
            name="childAllowance"
            type="number"
            onChange={props.incomeHandler}
            variant="outlined"
          />
          <TextField
            defaultValue={props.income.studyFinance}
            id="studyFinance"
            label="Studiestöd"
            name="studyFinance"
            type="number"
            onChange={props.incomeHandler}
            variant="outlined"
          />
          <TextField
            defaultValue={props.income.housingAllowance}
            id="housingAllowance"
            label="Bostadsbidrag"
            name="housingAllowance"
            type="number"
            onChange={props.incomeHandler}
            variant="outlined"
          />
          <TextField
            defaultValue={props.income.other}
            id="other"
            label="Övrigt"
            name="other"
            type="number"
            onChange={props.incomeHandler}
            variant="outlined"
          />
          <Typography variant="body1" className={style.form_sum}>
            {" "}
            Summa: {props.incomeTotal} kr
          </Typography>
        </div>
      </form>
    </Container>
  );
};

export default Inkomster;

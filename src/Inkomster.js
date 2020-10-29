import React from "react";
import { Container, TextField, Typography } from "@material-ui/core";
import { incomeStyle } from "./Styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
}));

function Inkomster(props) {
  const style = incomeStyle();
  const classes = useStyles();

  /*
  const reduceIncome = (props.income) => {
    Object.keys(props.income).reduce(
      (acc, value) => acc + props.income[value],
      0
    );
  };

  console.log(reduceIncome());*/
  console.log(props.income);

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
            onChange={(e) => {
              props.setIncome({ ...props.income, salary: e.target.value });
              //reduceIncome();
              //setTotal({ total: total + parseInt(e.target.value) });
            }}
            type="number"
            value={props.income.salary}
            variant="outlined"
          />
          <TextField
            id="unemployment"
            label="Arbetslöshetsersättning"
            name="unemployment"
            onChange={(e) =>
              props.setIncome({ ...props.income, unemployment: e.target.value })
            }
            type="number"
            value={props.income.unemployment}
            variant="outlined"
          />
          <TextField
            id="sick"
            label="Sjuk- och aktivitetsersättning"
            onChange={(e) =>
              props.setIncome({ ...props.income, sick: e.target.value })
            }
            type="number"
            value={props.income.sick}
            variant="outlined"
          />
          <TextField
            id="sickleave"
            label="Sjukpenning"
            type="number"
            value={props.income.sickleave}
            onChange={(e) =>
              props.setIncome({ ...props.income, sickleave: e.target.value })
            }
            variant="outlined"
          />
          <TextField
            id="parentalleave"
            label="Föräldrapening"
            type="number"
            value={props.income.parentalleave}
            onChange={(e) =>
              props.setIncome({
                ...props.income,
                parentalleave: e.target.value,
              })
            }
            variant="outlined"
          />
        </div>
      </form>
      <Typography variant="body1"> Total: </Typography>
    </Container>
  );
}

export default Inkomster;

import React from "react";
import { useState } from "react";
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

function Inkomster() {
  const style = incomeStyle();
  const classes = useStyles();
  const [income, setIncome] = useState({
    salary: "",
    unemployment: "",
    sick: "",
    sickleave: "",
    parentalleave: "",
  });

  console.log(income);

  return (
    <Container>
      <Typography className={style.income_title} variant="h4">
        Börja med skriv att in alla dina inkomster nedan.
      </Typography>
      <Typography variant="body2" className={style.income_text}>
        För att kunna veta om du kan ha behörighet till ekonomiskt bistånd ska
        dina inkomster jämföras med dina utkomster och med din
        familjeförhållande.
      </Typography>

      <form className={classes.root} autoComplete="off">
        <div>
          <TextField
            id="salary"
            label="Lön"
            onChange={(e) => setIncome({ ...income, salary: e.target.value })}
            type="number"
            value={income.salary}
            variant="outlined"
          />
          <TextField
            id="unemployment"
            label="Arbetslöshetsersättning"
            onChange={(e) =>
              setIncome({ ...income, unemployment: e.target.value })
            }
            type="number"
            value={income.unemployment}
            variant="outlined"
          />
          <TextField
            id="sick"
            label="Sjuk- och aktivitetsersättning"
            onChange={(e) => setIncome({ ...income, sick: e.target.value })}
            type="number"
            value={income.sick}
            variant="outlined"
          />
          <TextField
            id="sickleave"
            label="Sjukpenning"
            type="number"
            value={income.sickleave}
            onChange={(e) =>
              setIncome({ ...income, sickleave: e.target.value })
            }
            variant="outlined"
          />
          <TextField
            id="parentalleave"
            label="Föräldrapening"
            type="number"
            value={income.parentalleave}
            onChange={(e) =>
              setIncome({ ...income, parentalleave: e.target.value })
            }
            variant="outlined"
          />
        </div>
      </form>
    </Container>
  );
}

export default Inkomster;

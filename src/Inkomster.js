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
  const [salary, setSalary] = useState("");
  const handleChange = (event) => {
    setSalary(event.target.value);
  };

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
            onChange={handleChange}
            type="number"
            value={salary}
            variant="outlined"
          />
          <TextField
            id="unemployment"
            label="Arbetslöshetsersättning"
            type="number"
            variant="outlined"
          />
          <TextField
            id="sick"
            label="Sjuk- och aktivitetsersättning"
            type="number"
            variant="outlined"
          />
          <TextField id="sickleave" label="Sjukpenning" variant="outlined" />
          <TextField
            id="parentalleave"
            label="Föräldrapening"
            type="number"
            variant="outlined"
          />
        </div>
      </form>
    </Container>
  );
}

export default Inkomster;

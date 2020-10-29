import React from "react";
import { useState, useEffect, useRef } from "react";
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

/*const calculateIncome = (props) => {
  return <Typography variant="body1">props.totalIncome</Typography>;
};*/

function Inkomster(props) {
  const style = incomeStyle();
  const classes = useStyles();
  const [income, setIncome] = useState({
    salary: 0,
    unemployment: 0,
    sick: 0,
    sickleave: 0,
    parentalleave: 0,
  });
  let totalIncome = useRef(0);

  const reduceIncome = (props) => {
    Object.keys(props).reduce((acc, value) => acc + props[value]);
  };

  useEffect(() => {
    totalIncome.current = reduceIncome(income);
  });

  /*const calculateTotal = (income) => {
    return Object.entries(income).reduce((finalValue, [key, value]) => {
      if (value === "") {
        return finalValue;
      }
      return finalValue + value;
    }, 0);
  };

  const handleTotal = (e) => {
    const { value, name } = e.target; // gets the name and value from input
    const parsedValue = value === "" ? "" : parseFloat(value); // parses the value as a number or if empty treats it as empty string ""

    setIncome((prevState) => {
      const updatedIncome = {
        ...prevState.income,
        [name]: parsedValue,
      };
      // calculates the new total from updated income:
      const newTotal = calculateTotal(updatedIncome);
      return {
        ...income,
        total: newTotal,
      };
    });
  };*/

  console.log(income, totalIncome);

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
              setIncome({ ...income, salary: e.target.value });
              reduceIncome(income);
              //setTotal({ total: total + parseInt(e.target.value) });
            }}
            type="number"
            value={income.salary}
            variant="outlined"
          />
          <TextField
            id="unemployment"
            label="Arbetslöshetsersättning"
            name="unemployment"
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
      <Typography variant="body1" inputref={totalIncome}>
        {" "}
        Total: {totalIncome.current}
      </Typography>
    </Container>
  );
}

export default Inkomster;

import React, { useContext } from "react";
import { ExpensesContext } from "../context/ExpensesContext";
import { Container, Typography } from "@material-ui/core";

const Resultat = () => {
  const { incomeTotal } = useContext(ExpensesContext);
  const { state } = useContext(ExpensesContext);
  const { expensesTotal } = useContext(ExpensesContext);

  console.log(state.familyTotal); //undefined

  return (
    <Container>
      <Typography variant="h4">Resultat</Typography>
      <Typography variant="body1">Inkomster: {incomeTotal}</Typography>
      <Typography variant="body1">
        Familjeförhållande: {state.familyTotal}
      </Typography>
      <Typography variant="body1">Utgifter: {expensesTotal}</Typography>
      <br />
      <Typography variant="body1">
        Resultat:{" "}
        {(incomeTotal || 0) - (state.familyTotal || 0) - (expensesTotal || 0)}
      </Typography>
    </Container>
  );
};

export default Resultat;

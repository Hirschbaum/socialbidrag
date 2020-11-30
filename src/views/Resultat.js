import React, { useContext } from "react";
import { ExpensesContext } from "../context/ExpensesContext";
import { Container, Typography } from "@material-ui/core";

const Resultat = () => {
  const { incomeTotal } = useContext(ExpensesContext);
  const { expensesTotal } = useContext(ExpensesContext);

  return (
    <Container>
      <Typography variant="h4">Resultat</Typography>
      <Typography variant="body1">Inkomster: {incomeTotal}</Typography>
      <Typography variant="body1">Familjeförhållande: </Typography>
      <Typography variant="body1">Utgifter: {expensesTotal}</Typography>
      <br />
      <Typography variant="body1">
        Resultat: {incomeTotal - expensesTotal}
      </Typography>
    </Container>
  );
};

export default Resultat;

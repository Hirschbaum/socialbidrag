import React, { useContext } from "react";
import { IncomeContext } from "../context/IncomeContext";
import { Container, Typography } from "@material-ui/core";

const Resultat = () => {
  const { incomeTotal } = useContext(IncomeContext);
  console.log(incomeTotal); //undefined

  return (
    <Container>
      <Typography variant="h4">Resultat</Typography>
      <Typography variant="body1">Inkomster: {incomeTotal}</Typography>
    </Container>
  );
};

export default Resultat;

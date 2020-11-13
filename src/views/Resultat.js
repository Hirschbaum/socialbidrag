import React from "react";
import { Container, Typography } from "@material-ui/core";

const Resultat = (props) => {
  console.log(props.totalIncome); //undefined

  return (
    <Container>
      <Typography variant="h4">Resultat</Typography>
      <Typography variant="body1">Inkomster: {props.totalIncome}</Typography>
    </Container>
  );
};

export default Resultat;

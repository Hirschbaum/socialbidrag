import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { Box, Container, Typography } from "@material-ui/core";
import NeagtivResultLinks from "../components/NegativResultLinks";
import PositivResultLinks from "../components/PositivResultLinks";

const Resultat = () => {
  const { incomeTotal } = useContext(FormContext);
  const { state } = useContext(FormContext);
  const { expensesTotal } = useContext(FormContext);

  const result =
    (incomeTotal || 0) - (state.familyTotal || 0) - (expensesTotal || 0);

  let resultPositivText = `Beräkningen visar att dina månadsinkomster är  ${Math.abs(
    result
  )} kr lägre än den nivå som kan ge rätt till försörjningsstöd. Det kan betyda att du får försörjningsstöd om du ansöker. Socialtjänsten gör en individuell bedömning och kan ta hänsyn till annat än ekonomiska faktorer. `;
  let resultNegativText = `Beräkningen visar att dina månadsinkomster är ${result} kr högre än den nivå som kan ge rätt till försörjningsstöd. Det kan betyda att du inte får försörjningsstöd om du ansöker. Socialtjänsten gör en individuell bedömning och kan ta hänsyn till annat än ekonomiska faktorer. `;

  return (
    <Container>
      <Box>
        <Typography variant="h4">Resultat</Typography>
        <Typography variant="body1">Inkomster: {incomeTotal}</Typography>
        <Typography variant="body1">
          Familjeförhållande: {state.familyTotal}
        </Typography>
        <Typography variant="body1">Utgifter: {expensesTotal}</Typography>
        <br />
        <Typography variant="body1">Resultat: {result}</Typography>
      </Box>
      <Box>
        <Typography variant="body1">
          {result <= 0 ? resultPositivText : resultNegativText}
        </Typography>
        <Typography variant="body1">
          Kontakta socialtjänsten i din kommun om du vill ansöka om
          försörjningsstöd eller ha mer information.
        </Typography>
      </Box>
      {result <= 0 ? <PositivResultLinks /> : <NeagtivResultLinks />}
    </Container>
  );
};

export default Resultat;

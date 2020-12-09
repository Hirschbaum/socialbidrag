import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { Box, Container, Typography } from "@material-ui/core";
import PositivSumResultLinks from "../components/PositivSumResultLinks";
import NegativSumResultLinks from "../components/NegativSumResultLinks";
import { formStyle } from "../Styles";

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

  const style = formStyle();

  return (
    <Container>
      <Box>
        <Typography variant="h4" className={style.form_title}>
          Resultat
        </Typography>
        <Typography variant="body1" className={style.form_partsum}>
          Inkomster: {incomeTotal} kr
        </Typography>
        <Typography variant="body1" className={style.form_partsum}>
          Familjeförhållande: {state.familyTotal} kr
        </Typography>
        <Typography variant="body1" className={style.form_partsum}>
          Utgifter: {expensesTotal} kr
        </Typography>
        <hr />
        <Typography variant="body1" className={style.form_totalsum}>
          Resultat: {result} kr
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" className={style.form_links}>
          {result <= 0 ? resultPositivText : resultNegativText}
        </Typography>
        <Typography variant="body1" className={style.form_bold}>
          Kontakta Socialtjänsten i din kommun om du vill ansöka om socialbidrag
          eller ha mer information.
        </Typography>
      </Box>
      {result <= 0 ? <NegativSumResultLinks /> : <PositivSumResultLinks />}
    </Container>
  );
};

export default Resultat;

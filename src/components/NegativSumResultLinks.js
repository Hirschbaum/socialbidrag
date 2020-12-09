import React from "react";
import { Box, Typography } from "@material-ui/core";
import { formStyle } from "../Styles/Styles";

const NegativSumResultLinks = () => {
  const style = formStyle();

  return (
    <Box>
      <Typography variant="body1" className={style.form_bold_title}>
        Mer informationen hur du ansöker om ekonomiskt bistånd:
      </Typography>
      <Typography variant="body1" className={style.form_links}>
        https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/e-tjanst/
      </Typography>
      <Typography variant="body1" className={style.form_bold_title}>
        För hjälp till digital ansökning ring Kontaktcenter 042 10 50 00
      </Typography>
      <Typography variant="body1" className={style.form_bold}>
        Arbetsmarkandförvaltningen behandlar också behörighet till ekonomiskt
        bistånd:
      </Typography>
      <Typography variant="body1" className={style.form_adress}>
        Telefon: 042 10 78 75
      </Typography>
      <Typography variant="body1" className={style.form_adress}>
        Besökadress: Järnvägsgatan 35, Helsingborg
      </Typography>
      <Typography variant="body1" className={style.form_adress}>
        Telefon- och öppettider: Kl. 9-12 och Kl 13-16
      </Typography>
      <Typography variant="body1" className={style.form_adress}>
        Observera! Högst 5 personer får vistas i väntarummet samtidigt.
      </Typography>
    </Box>
  );
};

export default NegativSumResultLinks;

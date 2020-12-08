import React from "react";
import { Box, Typography } from "@material-ui/core";
import { formStyle } from "../Styles";

const PositivResultLinks = () => {
  const style = formStyle();

  return (
    <Box>
      <Typography variant="body1" className={style.form_links}>
        Mer informationen hur du ansöker om ekonomiskt bistånd:
      </Typography>
      <Typography variant="body1" className={style.form_links}>
        https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/e-tjanst/
      </Typography>
      <Typography variant="body1" className={style.form_links}>
        För hjälp till digital ansökning ring Kontaktcenter 042 10 50 00
      </Typography>
      <Typography variant="body1" className={style.form_links}>
        Arbetsmarkandförvaltningen behandlar också behörighet till ekonomiskt
        bistånd:
      </Typography>
      <Typography variant="body1" className={style.form_links}>
        Telefon: 042 10 78 75
      </Typography>
      <Typography variant="body1" className={style.form_links}>
        Besökadress: Järnvägsgatan 35, Helsingborg
      </Typography>
      <Typography variant="body1" className={style.form_links}>
        Telefon- och öppettider: Kl. 9-12 och Kl 13-16
      </Typography>
      <Typography variant="body1" className={style.form_links}>
        Observera! Högst 5 personer får vistas i väntarummet samtidigt.
      </Typography>
    </Box>
  );
};

export default PositivResultLinks;

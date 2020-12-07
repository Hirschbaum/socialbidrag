import React from "react";
import { Box, Typography } from "@material-ui/core";

const PositivResultLinks = () => {
  return (
    <Box>
      <Typography variant="body1">
        Mer informationen hur du ansöker om ekonomiskt bistånd:
      </Typography>
      <Typography variant="body1">
        https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/e-tjanst/
      </Typography>
      <Typography variant="body1">
        Behöver du hjälp med att ansöka digitalt?
      </Typography>
      <Typography variant="body1">
        Ring Kontaktcenter på telefonnummer 042 10 50 00.
      </Typography>
      <Typography variant="body1">
        Du kan också ringa din socialsekreterare om du vill ha hjälp per
        telefon.
      </Typography>
      <Typography variant="body1">
        Arbetsmarkandförvaltningen behandlar också behörighet till ekonomiskt
        bistånd:
      </Typography>
      <Typography variant="body1">Telefon: 042 10 78 75</Typography>
      <Typography variant="body1">
        Besökadress: Järnvägsgatan 35, Helsingborg
      </Typography>
      <Typography variant="body1">
        Telefon- och öppettider: Kl. 9-12 och Kl 13-16
      </Typography>
      <Typography variant="body1">
        Observera! Högst 5 personer får vistas i väntarummet samtidigt.
      </Typography>
    </Box>
  );
};

export default PositivResultLinks;

import React from "react";
import { Box, Typography } from "@material-ui/core";
import { formStyle } from "../Styles";

const NeagtivResultLinks = () => {
  const style = formStyle();

  return (
    <Box>
      <Typography variant="body1" className={style.form_links}>
        Du kan få kostnadfri ekonomisk rådgiving på Helsingborg Kontaktcenter:
      </Typography>
      <Typography variant="body1" className={style.form_links}>
        https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/budget-och-skuldradgivning/
      </Typography>
      <Typography variant="body1" className={style.form_links}>
        Kontakt för rådgiving via telefon:
      </Typography>
      <Typography variant="body1" className={style.form_links}>
        Budget och skuldrådgivarna når du via Helsingborg Kontakcenter, telefon
        042 10 50 00. Du blir ombedd att lämna kontaktuppgifter och kommer att
        bli kontaktad av en rådgivare inom fem arbetsdagar.
      </Typography>
      <Typography variant="body1" className={style.form_links}>
        Helsingborg Kontaktcenter finns på Stortorget 17.{" "}
      </Typography>
    </Box>
  );
};

export default NeagtivResultLinks;

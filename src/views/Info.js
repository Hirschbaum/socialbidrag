import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { infoStyle } from "../Styles";

// -----IF YOU UPDATE numbers, riksnormen: -----------------------------------------------------------
//------------- Change the date (DD. month YYYY) in the text below, when riksnormen have been updated.
//----------------------------------------------------------------------------------------------------

function Info() {
  const style = infoStyle();

  return (
    <Container className={style.info_container}>
      <Box className={style.info_box}>
        <Typography className={style.info_title} variant="h4">
          Så fungerar provberäkningen av ekonomiskt bistånd
        </Typography>

        <Typography className={style.info_text} variant="body1">
          Du kan ansöka ekonomiskt bistånd, som ibland kallas socialbidrag eller
          försörjningstöd, om du saknar eller inte har tillräckliga medel till
          din försörjning.
        </Typography>

        <Typography
          className={(style.info_text, style.info_bold)}
          variant="body1"
        >
          Här kan du göra en mycket förenklad beräkning för att få reda på om
          din ekonomi ligger över eller under nivån på ekonomiskt bistånd. Dessa
          siffror gäller från den 1. januari 2020.
        </Typography>

        <Typography className={style.info_text} variant="body1">
          Beräkningen bygger dels på riksnormen, dels på uppgifter som du själv
          matar in. Dina uppgifter sparas inte i systemet.
        </Typography>

        <Typography className={style.info_text} variant="body1">
          Denna miniräknarens resultat bygger på en individuell bedömning. Om du
          till exempel har pengar på banken eller realiserbara tillgångar som
          aktier, påverkar det din rätt till ekonomiskt bistånd.
        </Typography>
      </Box>
    </Container>
  );
}

export default Info;

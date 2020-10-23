import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { InfoStyle } from "./Styles";
import Nav from "./Nav";

// -----IF YOU UPDATE numbers, riksnormen: -----------------------------------------------------------
//------------- Change the date (DD. month YYYY) in the text below, when riksnormen have been updated.
//----------------------------------------------------------------------------------------------------

function Info() {
  const style = InfoStyle();

  return (
    <Container className={style.info_container}>
      <Nav />
      <Box className={style.info_box}>
        <Typography variant="body1" className={style.info_title}>
          Så fungerar provberäkningen av ekonomiskt bistånd
        </Typography>
        <Typography variant="body1" className={style.info_text}>
          Du kan ansöka ekonomiskt bistånd, som ibland kallas socialbidrag eller
          försörjningstöd, om du saknar eller inte har tillräckliga medel till
          din försörjning.
        </Typography>
        <Typography
          variant="body1"
          className={(style.info_text, style.info_bold)}
        >
          Här kan du göra en mycket förenklad beräkning för att få reda på om
          din ekonomi ligger över eller under nivån på ekonomiskt bistånd. Dessa
          siffror gäller från den 1. januari 2020.
        </Typography>
        <Typography variant="body1" className={style.info_text}>
          Beräkningen bygger dels på riksnormen, dels på uppgifter som du själv
          matar in. Dina uppgifter sparas inte i systemet.
        </Typography>
        <Typography variant="body1" className={style.info_text}>
          Denna miniräknarens resultat bygger på en individuell bedömning. Om du
          till exempel har pengar på banken eller realiserbara tillgångar som
          aktier, påverkar det din rätt till ekonomiskt bistånd.
        </Typography>
      </Box>

      {/*
      <Button variant="contained" className={style.info_button}>
        Jag förstår
      </Button>
 */}
    </Container>
  );
}

export default Info;

import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { infoStyle } from "./Styles";

function Viktig() {
  const style = infoStyle();

  return (
    <Container className={style.info_container}>
      <Box className={style.info_box}>
        <Typography className={style.info_title} variant="h4">
          Denna provberäkning avgör inte om du får ekonomiskt bistånd.
        </Typography>
        <Typography className={style.info_text} variant="body1">
          Denna applikation avgör inte om du har rätt till ekonomiskt bistånd.
          Eftersom provberäkningen inte tar hänsyn till alla faktorer som appen
          tar hänsyn till, kan resultatet blir annorlunda när du lämnar in en
          ansökan hos Socialtjänsten.
        </Typography>
        <Typography className={style.info_text} variant="body1">
          För att veta om du kan få ekonomiskt bistånd måste du kontakta
          socialtjänsten i din kommun. Du har alltid rätt att ansöka om
          ekonomiskt bistånd och få din sak provad av Socialtjänsten.
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

export default Viktig;

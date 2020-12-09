import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { homeStyle } from "../Styles";

function Home(props) {
  const style = homeStyle();

  const handleApi = () => {
    props.setApiOn(true);
  };

  return (
    <Container className={style.homeContainer} component="div">
      <Container className={style.headLine} component="div">
        <Typography variant="h5" className={style.hbg} component="h3">
          MITT HELSINGBORG
        </Typography>
      </Container>
      <Container component="div">
        <Box className={style.questionBox}>
          <Typography variant="h5" component="h4" className={style.question}>
            Hur kan vi hjälpa dig idag?
          </Typography>
        </Box>
        <Box className={style.homeBox} component="div">
          <Typography variant="button" className={style.btn} component="button">
            Kontaktcenter
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            ekonomisk rådgiving
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            förmyndare till barn
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            invandring och integration
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            funktionsnedsättning
          </Typography>
          <Typography
            variant="button"
            className={style.btn_main}
            component="button"
            onClick={() => handleApi()}
          >
            ekonomiskt bistånd
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            volontärarbete i Helsingborg
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            socialjour och mottagning
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            stöd till familj, barn, ungdom
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            hyresrådgiving och hitta hem
          </Typography>
        </Box>
      </Container>
    </Container>
  );
}

export default Home;

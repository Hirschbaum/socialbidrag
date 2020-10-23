import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { HomeStyle } from "./Styles";

function Home(props) {
  const style = HomeStyle();

  const handleApi = () => {
    props.setApiOn(true);
  };

  return (
    <Container className={style.home_container} component="div">
      Helsingborg City Shield
      <Container className={style.headLine} component="div">
        <Typography variant="h4" className={style.hbg} component="h3">
          HELSINGBORG
        </Typography>
      </Container>
      <Container component="div">
        <Typography variant="h5" className={style.question} component="h4">
          Hur kan vi hjälpa dig idag?
        </Typography>
        <Box className={style.home_box} component="div">
          <Typography variant="button" className={style.btn} component="button">
            Kontaktcenter
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            ekonomisk rådgiving
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            Mitt Helsingborg
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            förmyndare till barn
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            fonder och stiftelser
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            god man, förvaltare...
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            invandring och integration
          </Typography>
          <Typography
            variant="button"
            className={style.btn_main}
            component="button"
            onClick={() => handleApi()}
          >
            provberäkning ekonomiskt bistånd
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            volontärarbete i Helsingborg
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            äldreomsorg och senior
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            stöd till familj, barn, ungdom
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            hyresrådgiving och hitta hem
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            funktionsnedsättning
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            skildmässa
          </Typography>
          <Typography variant="button" className={style.btn} component="button">
            vid dödsfall
          </Typography>
        </Box>
      </Container>
    </Container>
  );
}

export default Home;

import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { HomeStyle } from "./Styles";

function Home(props) {
  const style = HomeStyle();

  const handleApi = () => {
    props.setApiOn(true);
  };

  return (
    <Container className={style.home_container}>
      Helsingborg City Shield
      <Container className={style.headLine}>
        <Typography variant="h4" className={style.hbg}>
          HELSINGBORG
        </Typography>
      </Container>
      <main>
        <Typography variant="h5" className={style.question}>
          Hur kan vi hjälpa dig idag?
        </Typography>
        <Box className={style.home_box}>
          <Typography variant="button" className={style.btn}>
            Kontaktcenter
          </Typography>
          <Typography variant="button" className={style.btn}>
            ekonomisk rådgiving
          </Typography>
          <Typography variant="button" className={style.btn}>
            Mitt Helsingborg
          </Typography>
          <Typography variant="button" className={style.btn}>
            förmyndare till barn
          </Typography>
          <Typography variant="button" className={style.btn}>
            fonder och stiftelser
          </Typography>
          <Typography variant="button" className={style.btn}>
            god man, förvaltare...
          </Typography>
          <Typography variant="button" className={style.btn}>
            invandring och integration
          </Typography>
          <Typography
            variant="button"
            className={style.btn_main}
            onClick={() => handleApi()}
          >
            provberäkning ekonomiskt bistånd
          </Typography>
          <Typography variant="button" className={style.btn}>
            volontärarbete i Helsingborg
          </Typography>
          <Typography variant="button" className={style.btn}>
            äldreomsorg och senior
          </Typography>
          <Typography variant="button" className={style.btn}>
            stöd till familj, barn, ungdom
          </Typography>
          <Typography variant="button" className={style.btn}>
            hyresrådgiving och hitta hem
          </Typography>
          <Typography variant="button" className={style.btn}>
            funktionsnedsättning
          </Typography>
          <Typography variant="button" className={style.btn}>
            skildmässa
          </Typography>
          <Typography variant="button" className={style.btn}>
            vid dödsfall
          </Typography>
        </Box>
      </main>
    </Container>
  );
}

export default Home;

import { makeStyles } from "@material-ui/core/styles";

//------------- Home.js ------------------------ the start Home page with many buttons--
//--------------------------------------------------------------------------------------
export const homeStyle = makeStyles(() => ({
  homeContainer: {
    maxWidth: "1500px",
    height: "100vh",
    margin: "0 auto",
  },
  headLine: {
    height: "8vh",
    margin: "0 auto",
  },
  hbg: {
    letterSpacing: "0.06em",
    marginTop: "1.5rem",
  },
  questionBox: {
    textAlign: "center",
    color: "rgb(174, 11, 5)",
    letterSpacing: "0.05em",
    fontWeight: "800",
    marginBottom: "1rem",
  },
  question: {
    textAlign: "center",
    margin: "1em 0",
    fontWeight: "600",
    letterspacing: "0.15em",
  },
  homeBox: {
    height: "70vh",
    //width: "100vw",
    margin: "0 auto",
    textAlign: "center",
    //position: "relative",
  },
  btn: {
    width: "24vw",
    height: "auto",
    backgroundColor: "#fff",
    color: "rgb(174, 11, 5)",
    border: "2px solid rgb(174, 11, 5)",
    borderRadius: "0.35em",
    padding: "1em 0.5em",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "1.1em",
    margin: "0.5rem",
  },
  btn_main: {
    width: "24vw",
    height: "auto",
    backgroundColor: "rgb(203, 0, 80)", //pinky red button
    color: "#fff",
    border: "2px solid rgb(174, 11, 5)",
    borderRadius: "0.35em",
    padding: "1em 0.5em",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "1.1em",
    //letterSpacing: "0.025em",
    margin: "0.5rem",
  },
}));

//------------- Info.js ------------------------ the second page with info about how it works

export const infoStyle = makeStyles(() => ({
  info_container: {
    height: "80vh",
    margin: "0 auto",
    position: "relative",
  },
  info_box: {
    margin: "2rem auto",
  },
  info_title: {
    margin: "1rem 0 0 2rem",
    fontSize: "1.4rem",
    fontWeight: "600",
    color: "rgb(174, 11, 5)",
  },
  info_text: {
    margin: "1rem 2rem 0rem",
  },
  info_bold: {
    fontWeight: "600",
    margin: "1rem 2rem 0rem",
  },
  info_button: {
    padding: "1rem 2rem",
    backgroundColor: "rgb(174, 11, 5)",
    border: "none",
    color: "#fff",
    letterSpacing: "0.15em",
    display: "inline-block",
    position: "absolute",
    margin: "0",
    top: "50%",
    left: "40%",
  },
}));

//------------- MainContainer.js ------------------------ the API's page with stepper in it
export const navStyle = makeStyles(() => ({
  next_button: {
    position: "absolute",
    bottom: "10vh",
    left: "50vw",
  },
  back_button: {
    position: "absolute",
    bottom: "10vh",
    left: "40vw",
  },
}));

//------------- style for: Inkomster.js AND Familj.js AND Utgifter.js -----------------------------------------------------
export const formStyle = makeStyles(() => ({
  form_title: {
    margin: "1rem 0",
    fontSize: "1.4rem",
    fontWeight: "600",
    color: "rgb(174, 11, 5)",
  },
  form_text: {
    margin: "1rem 2rem 2rem 1 rem",
    width: "50vw",
  },
  form_container: {
    height: "80vh",
    margin: "0 auto",
  },
  form_sum: {
    fontWeight: "600",
    fontSize: "1.2em",
    margin: "0.5em",
    letterSpacing: "0.08",
    color: "rgb(203, 0, 80)",
  },
  space_around: {
    margin: "2em 0 1em",
  },
  form_totalsum: {
    fontWeight: "600",
    fontSize: "1.5em",
    margin: "0.5em",
    letterSpacing: "0.08",
    color: "rgb(203, 0, 80)",
  },
  form_links: {
    margin: "0.3em",
  },
}));

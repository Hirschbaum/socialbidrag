import { makeStyles } from "@material-ui/core/styles";

//------------- Home.js ------------------------ the start Home page with many buttons
export const homeStyle = makeStyles(() => ({
  home_container: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
  },
  headLine: {
    height: "10vh",
    width: "80vw",
    margin: "0 auto",
  },
  hbg: {
    letterSpacing: "0.02em",
    marginTop: "1rem",
  },
  question: {
    textAlign: "center",
    color: "rgb(174, 11, 5)",
    letterSpacing: "0.05em",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  home_box: {
    height: "70vh",
    width: "100vw",
    margin: "0 auto",
    position: "relative",
  },
  btn: {
    width: "24vw", //before: 24vw, ide kell az a kiszámolós
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
    width: "24vw", //before 48vw, 24vw
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
    width: "80vw",
    height: "80vh",
    margin: "0",
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

//------------- Nav.js ------------------------ the API's page with stepper in it
export const navStyle = makeStyles(() => ({
  next_button: {
    position: "absolute",
    bottom: "30px",
    left: "50vw",
  },
  back_button: {
    position: "absolute",
    bottom: "30px",
    left: "40vw",
  },
}));

//Inkomster.js
export const incomeStyle = makeStyles(() => ({
  income_title: {
    margin: "1rem 0",
    fontSize: "1.4rem",
    fontWeight: "600",
    color: "rgb(174, 11, 5)",
  },
  income_text: {
    margin: "1rem 2rem 2rem 1 rem",
    width: "50vw",
  },
}));

import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// importing each side of the API as a component:
import Info from "./Info";
import Viktig from "./Viktig";
import Inkomster from "./Inkomster";
// instead of CSS:
import { navStyle } from "./Styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

//step's names in the stepper navigation
function getSteps() {
  return [
    "Info",
    "Viktig",
    "Inkomster",
    "Familj",
    "Utgifter",
    "Resultat",
    "Länkar",
  ];
}

//components underneath the stepper navigation
function getStepContent(stepIndex, props) {
  switch (stepIndex) {
    case 0:
      return <Info />;
    case 1:
      return <Viktig />;
    case 2:
      return <Inkomster {...props} />;
    case 3:
      return "Familjeförhållande";
    case 4:
      return "Utkomster";
    case 5:
      return "Resultat";
    case 6:
      return "Länkar";
    case 7:
      return "Återställa";
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const style = navStyle();

  /*states for the income in Inkomster component */
  const [income, setIncome] = useState({});

  /*function to update income state */
  function incomeHandler(e) {
    let incomeData = { ...income, [e.target.name]: e.target.value };
    setIncome(incomeData);
  }

  /*state for the total income in Inkomster component*/
  const [incomeTotal, setIncomeTotal] = useState(0);

  /*to update the incomeTotal */
  const incomeTotalHandler = (obj) => {
    let objClone = { ...obj };
    let sum = Object.values(objClone)
      .filter((prev) => prev !== "") //otherwise the total sum is NaN if the user delete an input
      .reduce((prev, current) => parseInt(prev) + parseInt(current), 0);
    setIncomeTotal(sum);
  };

  //useEffect doesnt work here neither:
  useEffect(() => {
    incomeTotalHandler(income);
  }, [income]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1); //setActiveStep(activeStep + 1)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1); //setActiveStep(activeStep - 1)
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container className={classes.root} {...props}>
      {/* steps in the stepper navigation on each API page: */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Container>
        <Container>
          {activeStep === steps.length ? (
            <Container>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button
                onClick={handleReset}
                color="secondary"
                variant="contained"
              >
                Återställa
              </Button>
            </Container>
          ) : (
            <Container>
              <Typography
                className={classes.instructions}
                component="span"
                variant="body2"
              >
                {getStepContent(
                  activeStep,
                  income,
                  setIncome,
                  incomeHandler,
                  incomeTotal,
                  setIncomeTotal,
                  incomeTotalHandler
                )}{" "}
                {/*in getStepContent: sends the states as well */}
              </Typography>
              <Container>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={style.back_button}
                >
                  Tillbaka
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleNext}
                  className={style.next_button}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Nästa"}
                </Button>
              </Container>
            </Container>
          )}
        </Container>
      </Container>
    </Container>
  );
}

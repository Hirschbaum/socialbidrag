import React from "react";
import { useState, useEffect } from "react";

//Material UI
import {
  Button,
  Container,
  makeStyles,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";

// importing each view of the API:
import Info from "./views/Info";
import Viktig from "./views/Viktig";
import Inkomster from "./views/Inkomster";
import Familj from "./views/Familj";

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
function getStepContent(
  stepIndex,
  income,
  setIncome,
  incomeHandler,
  incomeTotal,
  setIncomeTotal,
  incomeTotalHandler
) {
  switch (stepIndex) {
    case 0:
      return <Info />;
    case 1:
      return <Viktig />;
    case 2:
      return (
        <Inkomster
          income={income}
          setIncome={setIncome}
          incomeHandler={incomeHandler}
          incomeTotal={incomeTotal}
          setIncomeTotal={setIncomeTotal}
          incomeTotalHandler={incomeTotalHandler}
        />
      );
    case 3:
      return <Familj />;
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

  //useEffect works, incomeTotal used in Inkomster:
  useEffect(() => {
    incomeTotalHandler(income);
  }, [income]);

  const handleNext = () => {
    setActiveStep(activeStep + 1); //setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1); // setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container className={classes.root} {...props}>
      {/* steps in the Stepper navigation on each API page: */}
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

import React, { useContext, useEffect, useState } from "react";

//---------- Material UI
import {
  Button,
  Container,
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";

//---------- importing each view of the API:
import Info from "./views/Info";
import Viktig from "./views/Viktig";
import Inkomster from "./views/Inkomster";
import Familj2 from "./views/Familj2";
import Utgifter from "./views/Utgifter";
import Resultat from "./views/Resultat";

//----------- importing context
import { IncomeContext } from "./context/IncomeContext";
import { ExpensesContext } from "./context/ExpensesContext";

//----------- instead of CSS:
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

const muiTheme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        color: "#ccc",
        "&$active": {
          color: "rgb(203, 0, 80)",
        },
        "&$completed": {
          color: "rgb(203, 0, 80)",
        },
      },
    },
  },
});

//---------- step's names in the stepper navigation
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

//------------ components underneath the stepper navigation
function getStepContent(
  stepIndex,
  income,
  setIncome,
  incomeHandler,
  incomeTotal,
  setIncomeTotal,
  incomeTotalHandler,
  expenses,
  setExpenses,
  expensesHandler,
  expensesTotal,
  setExpensesTotal,
  expensesTotalHandler
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
      return <Familj2 />;
    case 4:
      return (
        <Utgifter
          expenses={expenses}
          setExpenses={setExpenses}
          expensesHandler={expensesHandler}
          expensesTotal={expensesTotal}
          setExpensesTotal={setExpensesTotal}
          expensesTotalHandler={expensesTotalHandler}
        />
      );
    case 5:
      return (
        <Resultat
          incomeTotal={incomeTotal}
          setIncomeTotal={setIncomeTotal}
          expensesTotal={expensesTotal}
          setExpensesTotal={setExpensesTotal}
        />
      );
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

  //---------------------INKOMSTER / INCOME ------------------
  //----------------------------------------------------------
  //------------ states for the income in Inkomster component
  const [income, setIncome] = useState({});

  //------------ function to update income state
  function incomeHandler(e) {
    let incomeData = { ...income, [e.target.name]: e.target.value };
    setIncome(incomeData);
  }

  //------------ updating incomeTotal with context hook, using it later in Resultat view
  const { incomeTotal, setIncomeTotal } = useContext(IncomeContext);

  //------------ to update the incomeTotal
  const incomeTotalHandler = (obj) => {
    let objClone = { ...obj };
    let sum = Object.values(objClone) //[INT, INT, INT]
      .filter((prev) => prev !== "") //otherwise the total sum is NaN if the user delete an input
      .reduce((prev, current) => parseInt(prev) + parseInt(current), 0);
    setIncomeTotal(sum);
  };

  useEffect(() => {
    incomeTotalHandler(income);
  });

  //--------------------------UTGIFTER / EXPENSES -----------
  //------------ states for the expenses in Utgifter component
  const [expenses, setExpenses] = useState({});

  //------------ function to update the expenses state
  const expensesHandler = (e) => {
    let expensesData = { ...expenses, [e.target.name]: e.target.value };
    setExpenses(expensesData);
  };

  //------------ updating incomeTotal with context hook, using it later in Resultat view
  const { expensesTotal, setExpensesTotal } = useContext(ExpensesContext);

  //------------ to update the expensesTotal
  const expensesTotalHandler = (obj) => {
    let objClone = { ...obj };
    let sum = Object.values(objClone)
      .filter((prev) => prev !== "") //otherwise the total sum is NaN if the user delete an input
      .reduce((prev, current) => parseInt(prev) + parseInt(current), 0);
    setExpensesTotal(sum);
  };

  useEffect(() => {
    expensesTotalHandler(expenses);
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container className={classes.root} {...props}>
      <MuiThemeProvider theme={muiTheme}>
        {/* steps in the Stepper navigation on each API page: */}
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </MuiThemeProvider>

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
                  incomeTotalHandler,
                  expenses,
                  setExpenses,
                  expensesHandler,
                  expensesTotal,
                  setExpensesTotal,
                  expensesTotalHandler
                )}{" "}
                {/*in getStepContent: sends the states, functions and callback functions as well */}
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
import React from "react";
import { useState, useReducer } from "react";
import { Container } from "@material-ui/core";
import Home from "./views/Home";
import MainContainer from "./components/MainContainer";
import { FormContext } from "./context/FormContext";
import { initialState, reducer } from "./reducer/Reducer";

function App() {
  const [appOn, setAppOn] = useState(false);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider
      value={{
        appOn,
        setAppOn,
        expensesTotal,
        setExpensesTotal,
        incomeTotal,
        setIncomeTotal,
        state,
        dispatch,
      }}
    >
      <Container>
        {appOn ? <MainContainer /> : <Home setApiOn={setAppOn} apiOn={appOn} />}
      </Container>
    </FormContext.Provider>
  );
}

export default App;

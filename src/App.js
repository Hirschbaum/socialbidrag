import React from "react";
import { useState, useReducer } from "react";
import { Container } from "@material-ui/core";
import Home from "./views/Home";
import MainContainer from "./MainContainer";
import { FormContext } from "./context/FormContext";
import { initialState, reducer } from "./reducer/Reducer";

function App() {
  const [apiOn, setApiOn] = useState(false);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider
      value={{
        expensesTotal,
        setExpensesTotal,
        incomeTotal,
        setIncomeTotal,
        state,
        dispatch,
      }}
    >
      <Container>
        {apiOn ? <MainContainer /> : <Home setApiOn={setApiOn} apiOn={apiOn} />}
      </Container>
    </FormContext.Provider>
  );
}

export default App;

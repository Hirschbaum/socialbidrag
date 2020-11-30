import React from "react";
import { useState, useReducer } from "react";
import { Container } from "@material-ui/core";
import Home from "./Home";
import MainContainer from "./MainContainer";
import { ExpensesContext } from "./context/ExpensesContext";
import { initialState, reducer } from "./Reducer";

function App() {
  const [apiOn, setApiOn] = useState(false);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ExpensesContext.Provider
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
    </ExpensesContext.Provider>
  );
}

export default App;

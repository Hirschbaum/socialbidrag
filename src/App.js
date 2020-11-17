import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import Home from "./Home";
import Nav from "./Nav";
import { IncomeContext } from "./context/IncomeContext";
import { ExpensesContext } from "./context/ExpensesContext";

function App() {
  const [apiOn, setApiOn] = useState(false);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);

  return (
    <IncomeContext.Provider value={{ incomeTotal, setIncomeTotal }}>
      <ExpensesContext.Provider value={{ expensesTotal, setExpensesTotal }}>
        <Container>
          {apiOn ? <Nav /> : <Home setApiOn={setApiOn} apiOn={apiOn} />}
        </Container>
      </ExpensesContext.Provider>
    </IncomeContext.Provider>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import Home from "./Home";
import Nav from "./Nav";
import { IncomeContext } from "./context/IncomeContext";

function App() {
  const [apiOn, setApiOn] = useState(false);
  const [incomeTotal, setIncomeTotal] = useState(0);

  return (
    <IncomeContext.Provider value={{ incomeTotal, setIncomeTotal }}>
      <Container>
        {apiOn ? <Nav /> : <Home setApiOn={setApiOn} apiOn={apiOn} />}
      </Container>
    </IncomeContext.Provider>
  );
}

export default App;

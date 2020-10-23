import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import Home from "./Home";
import Nav from "./Nav";

function App() {
  const [apiOn, setApiOn] = useState(false);

  return (
    <Container>
      {apiOn ? <Nav /> : <Home setApiOn={setApiOn} apiOn={apiOn} />}
    </Container>
  );
}

export default App;

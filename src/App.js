import React from "react";
import { useState } from "react";
import Home from "./Home";
import Info from "./Info";

function App() {
  const [apiOn, setApiOn] = useState(false);

  return <>{apiOn ? <Info /> : <Home setApiOn={setApiOn} apiOn={apiOn} />}</>;
}

export default App;

import { useState } from "react";
import MyContext from "./context/loggedContext";
import { Routes } from "./routes/Routes";

export function App() {
  const [state, setState] = useState(false);

  return (
    <MyContext.Provider value={{ state, setState }}>
      <Routes />
    </MyContext.Provider>
  );
}

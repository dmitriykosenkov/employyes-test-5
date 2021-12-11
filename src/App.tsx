import React from "react";
import s from "./App.module.css";
import BlockEmployees from "./components/BlockEmployees/BlockEmployees";
import CheckedEmployees from "./components/CheckedEmployees/CheckedEmployees";

function App() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <BlockEmployees />
        <CheckedEmployees/>
      </div>
    </div>
  );
}

export default App;

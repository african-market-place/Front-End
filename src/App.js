import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoginForm from "./components/login/loginPage";

import "./App.css";

function App() {
  return (
    <>
      <LoginForm />
      <Router>
        <Switch>
          <header className='App-header'></header>
        </Switch>
      </Router>
    </>
  );
}
export default App;

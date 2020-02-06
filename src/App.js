import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoginForm from "./components/login/loginPage";
import SignUpForm from "./components/login/signUp";

function App() {
  return (
    <>
      <LoginForm />
      <SignUpForm />
      <Router>
        <Switch>
          <header className='App-header'></header>
        </Switch>
      </Router>
    </>
  );
}
export default App;


import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import Product from './components/Product';
import ProductList from './components/ProductList';
import LoginForm from "./components/login/loginPage";
import "./App.css";

function App() {
  return (

    <Router>
      <Switch>
      <header className="App-header">
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route path="/product"component={Product}/>
        <Route path="/productList" component={ProductList}/>
        <Route path="/LoginForm" component={LoginForm}/>
      </header>
      </Switch>
    </Router>
    

  )

}
export default App;




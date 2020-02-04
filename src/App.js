import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import ProductList from './components/ProductList';

import Card from './components/Card';


import './App.css';

function App(){
  return (
    <Router>
      <Switch>
      <header className="App-header">
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/productList" component={ProductList}/>
        <Route path="/card" component={Card}/> 
      </header>
      </Switch>
    </Router>
    

  )

}
export default App;



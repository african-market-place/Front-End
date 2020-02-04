import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home';
import NavBar from './components/NavBar';

import ProductList from './components/ProductList';




import './App.css';

function App(){
  return (
    <Router>
      <Switch>
      <header className="App-header">
        <NavBar />
        <Route exact path="/" component={Home}/>
       
        <Route path="/productList" component={ProductList}/>
        
      </header>
      </Switch>
    </Router>
    

  )

}
export default App;



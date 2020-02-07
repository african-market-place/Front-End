import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import LoginForm from "./components/login/loginPage";
import SignUpForm from "./components/login/signUp";
import "./App.css";
import AddProduct from "./components/AddProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [newProductId, setNewProductId] = useState("");
  useEffect(() => {
    //were axios and side effects are living here
    axios
      .get("https://africanmarketplacebackend.herokuapp.com/api/items")
      .then(response => {
        console.log(response);
        setProducts(response.data.sort((a,b)=> b.id-a.id));
        // setSearchResults(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
    // an empty array prevent an infinity loop
  }, [newProductId]);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products">
          <ProductList products={products} setProducts={setProducts} />
        </Route>
        <Route path="/add-product">
          <AddProduct products={products} setNewProductId={setNewProductId} />
        </Route>
        <Route path="/login" component={LoginForm} />
        <Route path="/signUp" component={SignUpForm} />
      </Switch>
    </Router>
  );
}
export default App;

import React, {useState, useEffect} from "react";

import axios from 'axios';

// import Card from './Card';
import Product from './Product';
import SearchForm from "./SearchForm";


export default function ProductList(){
    //set up the slice of state and the setter function
    const[products, setProducts]=useState([]);
    const[searchResults, setSearchResults]=useState([]);

    useEffect(() =>{
        //were axios and side effects are living here
        axios
        .get('')
        .then(response =>{
            console.log(response.data);
            setProducts(response.data.results);
            setSearchResults(response.data.results);
        })
        .catch(error =>{
            console.log(error);
        });
        // an empty array prevent an infinity loop
    },[]);


    function changeHandler(event) {
        setProducts(event.target.value);
    };

    function results(searchResults){
        const results = products.filter(product => product.toLowerCase().includes(searchResults.products)
        );
        setSearchResults(results)
    }

    return(
        <div className="product-list-wrapper">
            <SearchForm changeHandler={changeHandler}/>
            {products.map((product) =>{
                return<Product key={product.id} card={product}/>
            })}
        </div>
    );
}
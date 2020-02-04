import React, {useState, useEffect} from "react";

import axios from 'axios';

import Card from './Card';


export default function ProductList(){
    //set up the slice of state and the setter function
    const[products, setProducts]=useState([]);

    useEffect(() =>{
        axios
        .get('')
        .then(response =>{
            console.log(response.data)
            setProducts(response.data.results);
        })
        .catch(error =>{
            console.log(error);
        });

    },[]);

    return(
        <div className="product-list-wrapper">
            {products.map((product) =>{
                return<Card key={product.id} card={product}/>
            })}
          
        </div>
    );
}
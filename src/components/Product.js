import React from 'react';

import styled from "styled-components";
import {keyframes} from "styled-components";

export default function Item(props){
    return(
        <Product>
            <h2>{props.product.name}</h2>
            <h2>Name:{props.product.name}</h2>
            <h2>Price:{props.product.price}</h2>
            <h2>Location:{props.product.location}</h2>
            <h2>Category:{props.product.category}</h2>
        </Product>
    );
}

const Product = styled.div`
display: flex;
justify-content:center;
flex-direction: column;
align-items: center;
margin: 0 auto;
color: ${props=>props.inputColor || "#f2fcfe"};
background:#bdc3c7;
width: 950px;
height: 400px;
box-sizing: border-box;
border: 5px white solid;
/* border-radius: 50%; */
overflow: hidden;
box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);



`;
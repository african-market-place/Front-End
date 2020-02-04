import React from 'react';

import styled from "styled-components";

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
flex-direction: column;
align-items: center;
color: ${props=>props.inputColor || "#f2fcfe"};
background: #CFDEF3;


`;
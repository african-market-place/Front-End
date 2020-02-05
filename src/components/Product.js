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
margin: 5% auto;
color: ${props=>props.inputColor || "#f2fcfe"};
background:#bdc3c7;
height: 450px;
position: relative;
padding: 25px;
box-sizing: border-box;
border: 5px white solid;
border-radius: 4px;
overflow: hidden;
max-width: 700px;
box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
animation: fadeInUp 0.6s forwards;
cursor: pointer;
&:hover {
      background: #79868f; 
     text-decoration: none;
}
@keyframes fadeInUp {
  0% {
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
  }
}
.product:nth-child(2) {
  animation-delay: 1s;
}
.product:nth-child(3) {
  animation-delay: 0.4s;
}


`;
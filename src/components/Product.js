import React from 'react';


import img8 from '../img/img8/location1.png';
import img9 from '../img/img9/category1png';

import styled from "styled-components";

export default function Item(props){
    return(
        <Product>
            <h1>{props.product.name}</h1>
            <img className="card-img" src="https://images.unsplash.com/photo-1562823159-ad2c5bd36cf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="cardImage"/>
            <p className="pill"> ₦ {props.product.price}</p>
            <p className="place"><img src={img8} alt="Home" className="navbar-img1"></img>{props.product.location}</p>
            <p className="group"><img src={img9} alt="Home" className="navbar-img1"></img>{props.product.category}</p>
        </Product>
    );
}

const Product = styled.div`
display: flex;
justify-content:center;
flex-direction: column;
align-items: center;
margin: 5%;
width: 20%;
color: ${props=>props.inputColor || "#f2fcfe"};
/* background:#bdc3c7; */
height: 450px;
position: relative;
padding: 25px;
box-sizing: border-box;
border: 5px white solid;
border-radius: 4px;
overflow: hidden;
box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
animation: fadeInUp 0.6s forwards;
transition: all 0.4s ease-in-out;
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
  @keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
  }
  
  h1{
    font-size: 24px;
	  margin: 10px 0 0 0;
	  font-weight: lighter;
	  text-transform: uppercase;
  }
  p{
    font-size: 12px;
	font-weight: light;
  }

  
}
`;

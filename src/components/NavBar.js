import React from 'react';
import {NavLink} from 'react-router-dom';

import img from '../img/Africa picture2.png';
import img1 from '../img/img1/home.png';
// import img2 from '../img/img2/signIn.png';
import img3 from  '../img/img3/login.png';
import img4 from '../img/img4/productList.png';
import img6 from '../img/img6/addProduct.png';

import styled from "styled-components";

 function Nav(){

    //  function handleSubmit(){

    //  }

    return(
       <NavBar>
           <img src={img}alt="Africa" className="navbar-logo"/>
           <h1> Africa MarketPlace</h1>
           <NavLink to="/"><img src={img1} alt="Home" className="navbar-img1"></img></NavLink>
           <NavLink to="/login"><img src={img3} alt="Login" className="navbar-img3"></img></NavLink>
           <NavLink to="/add-product"><img src={img6} alt="addProduct" className="navbar-img6"></img></NavLink>
           <NavLink to="/products"><img src={img4} alt="ProductList" className="navbar-img4"></img></NavLink>
       </NavBar>
    );
}

export default Nav;
//Styling navbar

const NavBar = styled.nav`
 display: flex;
 justify-content: space-evenly;
 margin: 0 auto;
 margin-top: 2rem;
 padding: 2rem;
 text-align: center;
 align-items: center;
 text-decoration:none;
 color: ${props =>props.inputColor || "#bdc3c7"};

 & a {
     color: ${props => props.inputColor || "#4286f4"};
     text-decoration: none;
     margin: 0px 10px;
     padding: 10px 10px;
     position: relative;
 }

 &:hover {
      background: #79868f; 
     text-decoration: underline; 
     
 }

h1{
    color:${props => props.inputColor || "#4286f4"};
    text-decoration: none;
    font-size:30px;
}

.navbar-logo{
    display:flex;
} 
`;
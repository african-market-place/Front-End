import React from 'react';
import {NavLink} from 'react-router-dom';

import styled from "styled-components";

 function Nav(){

    //  function handleSubmit(){

    //  }

    return(
       <NavBar>
           {/* <h1> Africa MarketPlace</h1> */}
           <NavLink to="/">Sign up</NavLink>
           <NavLink to="/login">Login</NavLink>
           <NavLink to="/productList">ProductList</NavLink>
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
     background: #FFF;
     text-decoration: underline;
 }


`;
import React from 'react';


import Styled from "styled-components";
import img5 from '../img/img5/search.png'

export default function SearchForm(props) {
  

    return(
        <StyledDiv>
            <div className="search-form">
            <input onChange={props.changeHandler} type="text" name="text"placeholder="Search here"/>
            <img src={img5} alt="Search" className="navbar-search"></img>
        </div>
        </StyledDiv>
        
    );
}

const StyledDiv=Styled.div`
   display: flex;
   justify-content:space-evenly;
   padding: 8px;
   background-color: #79868f;

   input{
       color: ${props=>props.inputColor || "#bdc3c7"};
   }

   .search{
       display: flex;
       margin: 0 10px;
   }
`;
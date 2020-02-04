import React from 'react';


import Styled from "styled-components";

export default function SearchForm(props) {
  

    return(
        <StyledDiv>
            <div className="search-form">
            <input onChange={props.changeHandler} type="text" name="text"placeholder="Search here"
            />
        </div>
        </StyledDiv>
        
    );
}

const StyledDiv=Styled.div`
   display: flex;
   justify-content:center;
   background-color: white;

   input{
       color: ${props=>props.inputColor || "#bdc3c7"};
   }
`;
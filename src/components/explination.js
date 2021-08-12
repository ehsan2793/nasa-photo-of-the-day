import React from "react";

import styled from "styled-components"

const ParagraphStyle = styled.p`
background-color: white;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
color: black;
font-size: 1.6rem;
margin: 10px ;
padding: 30px 60px;
text-align: center;
`;

const Holder = styled.div`
background-color: white;
border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 8px;
  margin: 16px;
  padding: 16px 8px 12px 16px;
`;

export default function Explanation (props) {


    return (
        <Holder>
        <ParagraphStyle>{props.paragraph}</ParagraphStyle> 
        </Holder>
    )
}
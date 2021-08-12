import React from "react";
import styled from "styled-components";

const TitleOfPage = styled.h1`
background-color: yellow;
color: gray;
text-shadow: 2px 2px black
`;

const Title = (props) => {
const { title } = props;



    return (
        <TitleOfPage>{title}</TitleOfPage>
    )
   
}

export default Title
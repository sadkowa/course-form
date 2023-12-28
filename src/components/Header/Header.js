import React from "react";
import StyledHeader from "./Header.styled";
import { Img } from "../Img";
import { Heading } from "../Heading";

const Header = ({ name }) => {
    return <StyledHeader>
        <Img reversed={true} />
        <Heading>{name}</Heading>
        <Img />
    </StyledHeader>
}

export default Header
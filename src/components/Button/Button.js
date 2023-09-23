import React, { useContext } from "react";
import StyledButton from "./Button.styled";
import {PageContext} from "../../context/context";

const Button = (({ variant = '', children }) => {
    const changePage = useContext(PageContext)

    return <StyledButton onClick={()=>changePage(variant)} variant={variant}>{children}</StyledButton>
})

export default Button 
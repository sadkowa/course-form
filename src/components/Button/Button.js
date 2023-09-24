import React, { useContext } from "react";
import StyledButton from "./Button.styled";
import {CurrentPageContext} from "../../context/context";

const Button = (({ variant = '', children }) => {
    const changePage = useContext(CurrentPageContext)

    return <StyledButton onClick={()=>changePage(variant)} variant={variant}>{children}</StyledButton>
})

export default Button 
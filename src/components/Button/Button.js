import React, { useContext } from "react";
import StyledButton from "./Button.styled";
import {CurrentPageContext} from "../../context/context";

const Button = (({ variant = '', children, ifCanChangePage = 'true', setErrors = null, error = null }) => {
    const changePage = useContext(CurrentPageContext)

    const clickHandler = () => {
        if (variant === 'right' && ifCanChangePage) {
            changePage(variant)
        }

        else if (variant === 'left') changePage(variant)
        else if (error) setErrors(error)
    }

    return <StyledButton onClick={clickHandler} variant={variant}>{children}</StyledButton>
})

export default Button 
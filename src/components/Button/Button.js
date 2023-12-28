import React from "react";
import StyledButton from "./Button.styled";

import { useDispatch } from "react-redux";
import { actions } from "../../modules/reducers/activePage.reducer";

const Button = (({ variant = '', children, ifCanChangePage = true, setError = null, errorMessage = null }) => {
    const dispatch = useDispatch()

    const clickHandler = () => {
        if (variant === 'right' && ifCanChangePage) {
            dispatch(actions.increase())
        }
        else if (variant === 'left') {
            dispatch(actions.decrease())
        }
        else if (errorMessage) setError(errorMessage)
    }

    return <StyledButton onClick={clickHandler} variant={variant}>{children}</StyledButton>
})

export default Button 
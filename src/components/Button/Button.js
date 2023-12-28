import React, { useContext } from "react";
import StyledButton from "./Button.styled";
import {CurrentPageContext} from "../../context/context";

import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../modules/reducers/activePage.reducer";

const Button = (({ variant = '', children, ifCanChangePage = 'true', setErrors = null, error = null }) => {
    // const changePage = useContext(CurrentPageContext)

    // const clickHandler = () => {
    //     if (variant === 'right' && ifCanChangePage) {
    //         changePage(variant)
    //     }
    //     else if (variant === 'left') changePage(variant)
    //     else if (error) setErrors(error)
    // }
    const dispatch = useDispatch()
    const activePage = useSelector(state => state.activePage.page)


    const clickHandler = () => {
        if (variant === 'right' && ifCanChangePage) {
            dispatch(actions.increase())
        }
        else if (variant === 'left') {
            dispatch(actions.decrease())
        }
        else if (error) setErrors(error)
    }

    return <StyledButton onClick={clickHandler} variant={variant}>{children}</StyledButton>
})

export default Button 
import React from "react";
import StyledDropdown from "./Dropdown.styled";

import { useDispatch } from "react-redux";
import { actions } from "../../modules/reducers/activeItems.reducer";

const Dropdown = ({children }) => {
    const dispatch = useDispatch()
    const clickHandler = () => {
        dispatch(actions.changeActiveList())
    }

    return (
        <StyledDropdown onClick={clickHandler} >{children}</StyledDropdown>
    )
}

export default Dropdown 
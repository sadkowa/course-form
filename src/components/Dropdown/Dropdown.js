import React, { useContext } from "react";
import StyledDropdown from "./Dropdown.styled";
import { ActiveListContext } from "../../context/context";

const Dropdown = ({children }) => {
    const changeActiveList = useContext(ActiveListContext)

    return (
        <StyledDropdown onClick={changeActiveList} type='submit' >{children}</StyledDropdown>
    )
}

export default Dropdown 
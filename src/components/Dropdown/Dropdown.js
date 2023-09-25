import React, { useContext } from "react";
import StyledDropdown from "./Dropdown.styled";
import { ActiveListContext } from "../../context/context";

const Dropdown = ({children }) => {
    const changeActiveList = useContext(ActiveListContext)

    return (
        <StyledDropdown onClick={changeActiveList} >{children}</StyledDropdown>
    )
}

export default Dropdown 
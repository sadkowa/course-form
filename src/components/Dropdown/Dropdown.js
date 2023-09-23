import React from "react";
import StyledDropdown from "./Dropdown.styled";
// import { ListContext } from "../../context/context";

const Dropdown = ({children }) => {
//     const clickHandler = useContext(ListContext)
// onClick={() => clickHandler(name)}

    return (
        <StyledDropdown  type='submit' >{children}</StyledDropdown>
    )
}

export default Dropdown 
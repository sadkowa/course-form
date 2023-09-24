import React, { useContext } from "react";
import StyledCheckmark from "./Checkmark.styled";
import { CheckedFieldContext } from "../../context/context";


const Checkmark = ({ checked, id }) => {
    const changeCheckedField = useContext(CheckedFieldContext)
    const clickHandler = () => {
        changeCheckedField(id)
    }

    return <StyledCheckmark onClick={clickHandler} checked={checked} />

}

export default Checkmark 
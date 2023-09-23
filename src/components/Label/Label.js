import React from "react";
import StyledLabel from "./Label.styled";

const Label = (props) => {
    const onClick = (e) => {
        e.preventDefault()
    }

    return (
        <StyledLabel name={props.label} onClick={onClick}>
            {props.children}
        </StyledLabel>)

}

export default Label 
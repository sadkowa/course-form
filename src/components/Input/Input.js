import React from "react";
import StyledButton from "./Input.styled";

const Button = (props) => {
    return <StyledButton>{props.children}</StyledButton>
}

export default Button 
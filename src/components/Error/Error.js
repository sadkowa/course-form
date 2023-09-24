import React from "react";
import StyledError from "./Error.styled";

const Error = (props) => {
    return <StyledError>{props.children}</StyledError>
}

export default Error
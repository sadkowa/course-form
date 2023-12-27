import React from "react";
import StyledError from "./Error.styled";

const Error = props => {
    // console.log(props.children)
    return <StyledError>{props.children}</StyledError>
}

export default Error
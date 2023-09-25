import React from "react";
import StyledForm from "./Form.styled";

const Form = ({ children, onSubmit, variant }) => {
    return <StyledForm onSubmit={onSubmit} variant={variant}>{children}</StyledForm>
}

export default Form
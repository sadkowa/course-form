import React from "react";
import StyledSubmitInput from "./SubmitInput.styled";

const SubmitInput = ({ value, name, variant }) => {

    return (
        <StyledSubmitInput variant={variant} type='submit' value={value} name={name}/>
    )
}

export default SubmitInput 
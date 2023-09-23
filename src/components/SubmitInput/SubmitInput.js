import React from "react";
import StyledSubmitInput from "./SubmitInput.styled";

const SubmitInput = ({ value, name }) => {

    return (
        <StyledSubmitInput type='submit' value={value} name={name}/>
    )
}

export default SubmitInput 
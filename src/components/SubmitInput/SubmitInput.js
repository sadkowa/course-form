import React from "react";
import StyledSubmitInput from "./SubmitInput.styled";

const SubmitInput = ({ value }) => {

    return (
        <StyledSubmitInput type='submit' value={value} />
    )
}

export default SubmitInput 
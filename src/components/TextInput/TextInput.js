import React from "react";
import StyledTextInput from "./TextInput.styled";

const TextInput = ({ name, onChange }) => {

    return (
        <StyledTextInput onChange={onChange} type='text' name={name} />
        
    )
}

export default TextInput 
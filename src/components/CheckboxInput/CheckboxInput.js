import React from "react";
import StyledCheckboxInput from "./CheckboxInput.styled";

const CheckboxInput = ({ name, id }) => {

    return <StyledCheckboxInput  type='checkbox' name={name} id={id} />

}

export default CheckboxInput 
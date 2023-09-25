import React from "react";
import StyledProgressBar from "./ProgressBar.styled";
import StyledBarBox from "./BarBox.styled";

const ProgressBar = ({ value, prevValue, max }) => {
    return (
        <StyledBarBox>
            <StyledProgressBar ratio1={prevValue / max} ratio2={value / max} value={value} prevValue={prevValue} max={max} />
        </StyledBarBox>
    )    
}

export default ProgressBar
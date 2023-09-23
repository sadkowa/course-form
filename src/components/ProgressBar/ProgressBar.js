import React from "react";
import StyledProgressBar from "./ProgressBar.styled";
import { Label } from "../Label";

const ProgressBar = (props) => {

    return  <StyledProgressBar value={props.value} max={props.max} />
        
}

export default ProgressBar
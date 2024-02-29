import React from "react";
import StyledImg from "./Img.styled";
import flag from './../../images/flag.png'

const Img = props => {
    return <StyledImg src={flag} alt="flag" reversed={props.reversed}/>
}

export default Img

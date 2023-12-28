import React from "react";
import StyledCard from "./Card.styled";

const Card = (props) => {
    return <StyledCard option={props.option}>{props.children}</StyledCard>
}

export default Card
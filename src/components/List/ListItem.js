import React from "react";
import StyledListItem from "./ListItem.styled";

const ListItem = (props)=> {
    return <StyledListItem>{props.children}</StyledListItem>
}

export default ListItem
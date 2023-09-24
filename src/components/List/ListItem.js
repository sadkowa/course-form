import React, {useContext} from "react";
import StyledListItem from "./ListItem.styled";
import { ActiveListContext } from "../../context/context";
import { LangLevelContext } from "../../context/context";


const ListItem = ({mark, name, children})=> {
    const changeActiveList = useContext(ActiveListContext)
    const changeLangLevel = useContext(LangLevelContext)

    const clickHandler = ()=> {
        changeActiveList()

        const currentLevel = `${mark} - ${name}`
        changeLangLevel(currentLevel)
    }

    return <StyledListItem onClick={clickHandler}>{children}</StyledListItem>
}

export default ListItem
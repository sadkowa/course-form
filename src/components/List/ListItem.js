import React, {useContext} from "react";
import StyledListItem from "./ListItem.styled";

import { LangLevelContext } from "../../context/context";
import { useDispatch } from "react-redux";
import { actions } from "../../modules/reducers/courseForm.reducer";

const ListItem = ({mark, name, children})=> {

    const dispatch = useDispatch()
    const changeLangLevel = useContext(LangLevelContext)

    const clickHandler = ()=> {
        dispatch(actions.changeActiveList())

        const currentLevel = `${mark} - ${name}`
        changeLangLevel(currentLevel)
    }

    return <StyledListItem onClick={clickHandler}>{children}</StyledListItem>
}

export default ListItem
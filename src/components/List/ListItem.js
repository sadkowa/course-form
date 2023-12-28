import React from "react";
import StyledListItem from "./ListItem.styled";

import { useDispatch } from "react-redux";
import { actions } from "../../modules/reducers/courseForm.reducer";
import { actions as activeActions} from "../../modules/reducers/activeItems.reducer";

const ListItem = ({mark, name, children})=> {

    const dispatch = useDispatch()

    const clickHandler = ()=> {
        dispatch(activeActions.changeActiveList())

        const currentLevel = `${mark} - ${name}`
        dispatch(actions.setEngLevel(currentLevel))
    }

    return <StyledListItem onClick={clickHandler}>{children}</StyledListItem>
}

export default ListItem
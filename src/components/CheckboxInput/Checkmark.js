import React from "react";
import StyledCheckmark from "./Checkmark.styled";

import { useDispatch } from "react-redux";
import { actions } from "../../modules/reducers/courseForm.reducer";

const Checkmark = ({ checked, name }) => {
    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(actions.pickCourse(name))
    }

    return <StyledCheckmark onClick={clickHandler} checked={checked} />

}

export default Checkmark 
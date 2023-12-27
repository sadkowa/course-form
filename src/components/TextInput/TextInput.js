import React, { useState } from "react";
import StyledTextInput from "./TextInput.styled";
import { Error } from "../Error";

const TextInput = ({ name, value, setFirstName = null, setLastName = null, setEmail = null }) => {

    const [error, setError] = useState()

    const changeHandler = (name, e) => {

        name === 'firstName' && setFirstName(e.target.value)
        name === 'lastName' && setLastName(e.target.value)
        name === 'email' && setEmail(e.target.value)
    }

    const blurHandler = () => {
        if (name === 'firstName') {
            setError('')
            if (value.length <= 0) {          
                setError(`Field ${name} is required! `)
            }
        }
        if (name === 'lastName') {
            setError('')
            if (value.length <= 0) {
                setError(`Field ${name} is required! `)
            }
        }
        if (name === 'email') {
            setError('')
            const pattern = /^[-\w.]+@([-\w]+\.)+[a-z]+$/i
            const reg = new RegExp(pattern)
            if (!reg.test(value)) {
                setError(`Invalid email format `)
            }
        }
    }

    return (
        <>
            <StyledTextInput
                onBlur={blurHandler}
                onChange={(e) => changeHandler(name, e)}
                value={value}
                type='text'
                name={name}
            />
        </>
    )
}

export default TextInput 
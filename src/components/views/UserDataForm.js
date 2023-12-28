import React, {  useState } from "react";

import { Page, Card, Button, Label, ProgressBar, Header, SubmitInput, Form } from '..'
import StyledTextInput from "../TextInput/TextInput.styled";
import StyledError from "../Error/Error.styled";

import { useDispatch } from "react-redux";
import { actions } from "../../modules/reducers/activePage.reducer";

import { initState, userDataFields, fieldValidate, formValidate } from "../../helpers/formData";


const UserDataForm = () => {
    const {userData} = initState
    const [studentData, setStudentData] = useState(userData)
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()

        const newErrors = formValidate(studentData);
        setErrors(newErrors)


        if (Object.keys(newErrors).length === 0) {
            dispatch(actions.increase())
        } 
    }

    const handleFieldChange = (e) => {
        const { value, name } = e.target

        setStudentData({
            ...studentData,
            [name]: value
        })
    }

    const handleBlur = field => {
        const { name } = field

        const currentErrorMessage = fieldValidate(field, studentData)

        setErrors({ ...errors, [name]: [currentErrorMessage] })
    }

    const errorRender = ([error]) => {

        return <StyledError>{error}</StyledError>
    }

    const fieldsRender = () => {

        return userDataFields.map(field => {
            const { id, name, label } = field

            return (
                <Label key={id}>{label}
                    {errors[name] && errorRender(errors[name])}
                    <StyledTextInput
                        value={studentData[name]}
                        onChange={handleFieldChange}
                        onBlur={() => handleBlur(field)}
                        name={name}/>
                </Label>)
        })
    }

    return (
        <Page>
            <Header name="Fill in the form to schedule the first trial lesson" />
            <Card>
                <Button variant="left">&#10094;</Button>
                <Form onSubmit={submitHandler}>
                    {fieldsRender()}
                    <SubmitInput value='Submit' /> 
                </Form>
                <Label>
                    <ProgressBar prevValue={33} value={66} max={100} />
                </Label>
            </Card>
        </Page>
    )
}

export default UserDataForm
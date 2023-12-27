import React, { useContext, useState } from "react";

import { Page, Card, Button, Label, ProgressBar, Header, Img, Heading, SubmitInput, TextInput, Form } from '../'

import { CurrentPageContext } from "../../context/context";


const Page3 = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const changePage = useContext(CurrentPageContext)

    const submitHandler = (e)=> {
        e.preventDefault()
        const errorsList = []

        if (firstName <= 0) {
            errorsList.push(`Field First Name is required.`)
        }

        if (lastName <= 0) {
            errorsList.push(`Field Last Name is required.`)
        }

        const pattern = /^[-\w.]+@([-\w]+\.)+[a-z]+$/i
        const reg = new RegExp(pattern)
        if (!reg.test(email)) {
            errorsList.push(`Invalid email format.`)
        }

        if (errorsList.length > 0) {
            alert(`Form filled with invalid data:\n ${errorsList.join('\n ')}`)
        } else changePage('submit')
    }

    return (
        <Page>
            <Header>
                <Heading>Fill in the form to schedule the first trial lesson</Heading>
                <Img />
            </Header>
            <Card>
                <Button variant="left">&#10094;</Button>
                <Form onSubmit={submitHandler}>
                    <Label label='firstName'>First Name
                            <TextInput name='firstName' value={firstName} setFirstName={setFirstName} />
                    </Label>
                    <Label label='lastName'>Last Name
                            <TextInput name='lastName' value={lastName} setLastName={setLastName} />
                    </Label>
                    <Label label='email'>Email
                            <TextInput name='email' value={email} setEmail={setEmail} />
                    </Label>
                    <SubmitInput value='Submit' />
                </Form>
                <Label>
                    <ProgressBar prevValue={33} value={66} max={100} />
                </Label>
            </Card>
        </Page>
    )
}

export default Page3
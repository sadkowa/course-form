import React, { useState } from "react";

import { Page } from "./";
import { Card } from "../Card";
import { Button } from "../Button";
import { Label } from "../Label";
import { ProgressBar } from "../ProgressBar";
import { Header } from "../Header";
import { Img } from "../Img";
import { Heading } from "../Heading";
import { SubmitInput } from "../SubmitInput";
import { TextInput } from "../TextInput";
import { CardTitle } from "../Card/CardTitle";
import styled from "styled-components";
import { Form } from "../Form";


const Page3 = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const changeHandler = (e) => {
        
    }

    const submitHandler = (e)=> {
        e.preventDefault()
        console.log(e.target)

    }

    return (
        <Page>
            <Header>
                <Heading>Fill in the form to schedule the first trial lesson</Heading>
                <Img />
            </Header>
            <Card>
                <Button variant="left">{'<'}</Button>

                <Form onSubmit={submitHandler}>
                <Label label='firstName'>First Name
                        <TextInput name='firstName' value={firstName} onChange={changeHandler} />
                </Label>
                <Label label='lastName'>Last Name
                        <TextInput name='lastName' value={lastName} />
                </Label>
                <Label label='email'>Email
                        <TextInput name='email' value={email} />
                </Label>
                    <SubmitInput name='submit' value='Submit' />
                </Form>
                <Label>
                    <ProgressBar value="66" max="100" />
                </Label>
                <Button variant="right">{'>'}</Button>

            </Card>

        </Page>
    )
}



export default Page3
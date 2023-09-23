import React from "react";
import Page from "./Page";
import { Card } from "../Card";
import { Button } from "../Button";
import { Label } from "../Label";
import { ProgressBar } from "../ProgressBar";
import { Header } from "../Header";
import { Img } from "../Img";
import { Heading } from "../Heading";
import { SubmitInput } from "../SubmitInput";
import { TextInput } from "../TextInput";

const Page3 = () => {
    return (
        <Page>
            <Header>
                <Heading>Fill in the form to set the first lesson</Heading>
                <Img />
            </Header>
            <Card>
                <Button variant="left">{'<'}</Button>
                <Label label='firstName'>First Name
                    <TextInput name='firstName' />
                </Label>
                <Label label='lastName'>Last Name
                    <TextInput name='lastName' />
                </Label>
                <Label label='email'>Email
                    <TextInput name='email' />
                </Label>
                    <SubmitInput name='submit' value='Submit' />
                <Label>
                    <ProgressBar value="100" max="100" />
                </Label>
            </Card>

        </Page>
    )
}

export default Page3
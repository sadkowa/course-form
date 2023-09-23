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
import { CardTitle } from "../CardTitle";
import { Form } from "../Form";


const Page2 = () => {
    return (
        <Page>
            <Header>
                <Heading>Let's choose one of our recommended courses</Heading>
                <Img />
            </Header>
            <Card>
            <Button variant="left">{'<'}</Button>
                <CardTitle>Pick a course</CardTitle>
                <Form>
                    <Label > A1 speaking
                        <input type="checkbox" />
                    </Label>

                    <Label > A1 listening
                        <input type="checkbox" />
                    </Label>
            
                        <SubmitInput value="Buy"/>
           
                </Form>

                <Label>
                    <ProgressBar value="66" max="100" />
                </Label>
                <Button variant="right">{'>'}</Button>
            </Card>

        </Page>
    )
}

export default Page2
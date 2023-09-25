import React from "react";
import Page from "./Page";
import { Card } from "../Card";
import { Header } from "../Header";
import { Img } from "../Img";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Label } from "../Label"
import { ProgressBar } from "../ProgressBar"


const Page4 = () => {
    return (
        <Page>
            <Header>
                <Heading>Thank you for completing the form!</Heading>
                <Img />
            </Header>
            <Card>
                <Text>We will contact you to set the first trial meeting. <br />See you soon!</Text>
                <Label>
                    <ProgressBar prevValue={66} value={100} max={100}/>
                </Label>
            </Card>
        </Page>
    )
}

export default Page4
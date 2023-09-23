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
import { Text } from "../Text";

const Page4 = () => {
    return (
        <Page>
            <Header>
                <Heading>Thank you for completing the form!</Heading>
                <Img />
            </Header>
            <Card>
                <Text>We will contact you to set the first trial meeting. <br />See you soon!</Text>
            </Card>

        </Page>
    )
}

export default Page4
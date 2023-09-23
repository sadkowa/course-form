import React from "react";
import Page from "./Page";
import { Card } from "../Card";
import { Button } from "../Button";
import { Label } from "../Label";
import { ProgressBar } from "../ProgressBar";
import { Header } from "../Header";
import { Img } from "../Img";
import { Heading } from "../Heading";

const Page1 = () => {
    return (
        <Page>
            <Header>
                <Heading>Let's start learning English with us!</Heading>
                <Img />
            </Header>
            <Card>
                <div>Choose your language level</div>
                <ul>
                    <li>A1</li>
                    <li>A2</li>
                    <li>B1</li>
                    <li>B2</li>
                    <li>C1</li>
                    <li>C2</li>
                </ul>
                <Label>
                    <ProgressBar value="33" max="100" />
                </Label>
                <Button variant="right">{'>'}</Button>
            </Card>

        </Page>
    )
}

export default Page1
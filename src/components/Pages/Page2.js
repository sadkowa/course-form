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

const Page2 = () => {
    return (
        <Page>
            <Header>
                <Heading>Let's choose one of our recommended courses</Heading>
                <Img />
            </Header>
            <Card>
            <Button variant="left">{'<'}</Button>
                <h2>Choose your language level</h2>
                <form>
                    <label htmlFor=""> A1 speaking
                        <input type="checkbox" />
                    </label>
                    <br />
                    <label htmlFor=""> A1 listening
                        <input type="checkbox" />
                    </label>
                    <Label>
                        <SubmitInput value="Buy"/>
                    </Label>
                </form>

                <Label>
                    <ProgressBar value="66" max="100" />
                </Label>
                <Button variant="right">{'>'}</Button>
            </Card>

        </Page>
    )
}

export default Page2
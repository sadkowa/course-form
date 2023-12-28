import React from "react";

import { Page, Card, ProgressBar, Header, Text, Label } from '..'


const Summary = () => {
    return (
        <Page>
            <Header name="Thank you for completing the form!" />
            <Card>
                <Text>We will contact you to set the first trial meeting. <br />See you soon!</Text>
                <Label>
                    <ProgressBar prevValue={66} value={100} max={100} />
                </Label>
            </Card>
        </Page>
    )
}

export default Summary
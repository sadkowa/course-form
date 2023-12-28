import React from "react";

import { Page, Card, ProgressBar, Header, Text, Label, CardTitle, List, ListItem } from '..'
import { useSelector } from "react-redux";

const Summary = () => {
    const { engLevel, pickedCourse, formState } = useSelector(state => state.courseForm)
    return (
        <Page>
            <Header name="Thank you for completing the form!" />
            <Card>
                <Card option='summary'>
                    <CardTitle>Summary:</CardTitle>
                    <Label>Your english level: {engLevel}</Label>
                    <Label>Picked course: {pickedCourse}</Label>
                    <Label>Your name: {formState.firstName} {formState.lastName}</Label>
                    <Label>Your email: {formState.email}</Label>
                </Card>
                <Text>We will contact you to set the first trial meeting. <br />See you soon!</Text>
                <Label>
                    <ProgressBar prevValue={66} value={100} max={100} />
                </Label>
            </Card>
        </Page>
    )
}

export default Summary
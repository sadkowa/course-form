import React from "react";

import { Page, Card, ProgressBar, Header, Text, Label, CardTitle, SummaryInfo } from '..'
import { useSelector } from "react-redux";

const Summary = () => {
    const { engLevel, pickedCourse, formState } = useSelector(state => state.courseForm)
    return (
        <Page>
            <Header name="Thank you for completing the form!" />
            <Card>
                <Card option='summary'>
                    <CardTitle>Summary:</CardTitle>
                    <Label name='summary'>Your english level: <SummaryInfo>{engLevel}</SummaryInfo></Label>
                    <Label name='summary'>Picked course: <SummaryInfo>{pickedCourse}</SummaryInfo></Label>
                    <Label name='summary'>Your name: <SummaryInfo>{formState.firstName} {formState.lastName}</SummaryInfo> </Label>
                    <Label name='summary'>Your email: <SummaryInfo>{formState.email}</SummaryInfo></Label>
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
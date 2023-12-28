import React, { useState } from "react";

import { Page, Card, Button, Label, ProgressBar, Header, CardTitle, Form, CheckboxInput, Checkmark, Error } from '..'

import { courses, pageError } from "../../providers/data";
import { useSelector } from "react-redux";

const CourseForm = () => {
    const { pickedCourse } = useSelector(state => state.courseForm)
    const [error, setError] = useState(null)

    const renderFields = courses.map(({ id, name }) => {
        return (
            <Label key={id} label='Checkbox'>
                <CheckboxInput />{name}
                <Checkmark
                    checked={name === pickedCourse}
                    name={name} />
            </Label>
        )
    })

    return (
        <Page>
            <Header name='Choose one of our recommended courses' />
            <Card>
                <Button variant="left">&#10094;</Button>
                <CardTitle>Pick a course</CardTitle>
                <Form>
                    {renderFields}
                </Form>
                {error && <Error>{error}</Error>}
                <Label>
                    <ProgressBar prevValue={0} value={33} max={100} />
                </Label>
                <Button
                    setError={setError}
                    errorMessage={pageError}
                    ifCanChangePage={pickedCourse}
                    variant="right">
                    &#10095;
                </Button>
            </Card>
        </Page>
    )
}

export default CourseForm
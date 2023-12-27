import React, { useState } from "react";

import { Page, Card, Button, Label, ProgressBar, Header, Img, Heading, CardTitle, Form, CheckboxInput, Checkmark, Error } from '..'

import { courses, page2Error } from "../../providers/data";
import { CheckedFieldContext } from "../../context/context";

const CourseForm = () => {
    const [checkedField, setCheckedField] = useState(null)
    const [errors, setErrors] = useState(null)

    const { Provider } = CheckedFieldContext

    const changeCheckedField = (id) => {
        setCheckedField(id)
    }

    const renderFields = courses.map(({ id, name }) => {
        return (
            <Provider key={id} value={changeCheckedField}>
                <Label label='Checkbox'>
                    <CheckboxInput />{name}
                    <Checkmark checked={id === checkedField} id={id} />
                </Label>
            </Provider>
        )
    })

    return (
        <Page>
            <Header>
                <Heading>Choose one of our recommended courses</Heading>
                <Img />
            </Header>
            <Card>
                <Button variant="left">&#10094;</Button>
                <CardTitle>Pick a course</CardTitle>
                <Form>
                    {renderFields}
                </Form>
                {errors && <Error>
                    {errors}
                </Error>}
                <Label>
                    <ProgressBar prevValue={0} value={33} max={100} />
                </Label>
                <Button setErrors={setErrors} error={page2Error} ifCanChangePage={checkedField} variant="right">&#10095;</Button>
            </Card>
        </Page>
    )
}

export default CourseForm
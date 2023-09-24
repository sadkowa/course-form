import React, { useState } from "react";
import Page from "./Page";
import { Card } from "../Card";
import { Button } from "../Button";
import { Label } from "../Label";
import { ProgressBar } from "../ProgressBar";
import { Header } from "../Header";
import { Img } from "../Img";
import { Heading } from "../Heading";
import { CardTitle } from "../Card/CardTitle";
import { Form } from "../Form";
import { CheckboxInput, Checkmark } from "../CheckboxInput";
import { Error } from "../Error";

import { courses, page2Error } from "../../providers/data";
import { CheckedFieldContext } from "../../context/context";

const Page2 = () => {
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
                    <CheckboxInput type="checkbox" id={id} />{name}
                    <Checkmark checked={id === checkedField} id={id} />
                </Label>
            </Provider>
        )
    })

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
                    {renderFields}         
                </Form>
                {errors && <Error>
                    {errors}
                </Error>}
                <Label>
                    <ProgressBar value="33" max="100" />
                </Label>
                <Button setErrors={setErrors} error={page2Error} ifCanChangePage={checkedField} variant="right">{'>'}</Button>
            </Card>

        </Page>
    )
}

export default Page2
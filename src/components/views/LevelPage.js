import React from "react";

import { Page, Card, Button, Label, ProgressBar, Header, CardTitle, List, ListItem, Dropdown, Span } from '..'

import { englishLevels } from "../../providers/data";

import { useSelector } from "react-redux";


const LevelPage = () => {
    const { engLevel, activeList } = useSelector(state => state.courseForm)

    const renderListItems = englishLevels.map(({ id, mark, name }) => {
        return (
            <ListItem
                key={id}
                mark={mark}
                name={name}>
                {mark} - {name}
            </ListItem>
        )
    })

    return (
        <Page>
            <Header name='Start learning English with us!'/>
            <Card>
                <CardTitle>Choose your English level</CardTitle>
                {!activeList && <Dropdown>{engLevel} <Span>&#x25BC;</Span></Dropdown>}
                    {activeList && <List>
                        {renderListItems}
                    </List>}
                <Label>
                    <ProgressBar prevValue={0} value={0} max={100} />
                </Label>
                <Button variant="right">&#10095;</Button>
            </Card>
        </Page>
    )
}

export default LevelPage
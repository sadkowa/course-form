import React, { useState } from "react";

import { Page, Card, Button, Label, ProgressBar, Header, CardTitle, List, ListItem, Dropdown, Span } from '..'

import { englishLevels } from "../../providers/data";

import { ActiveListContext } from "../../context/context";
import { LangLevelContext } from "../../context/context";


const LevelPage = () => {
    const initLevel = `${englishLevels[0].mark} - ${englishLevels[0].name}`

    const [activeList, setActiveList] = useState(false)
    const [pickedLevel, setPickedLevel] = useState(initLevel)

    const { Provider: ActiveListProvider } = ActiveListContext
    const { Provider: LangLevelProvider } = LangLevelContext

    const changeLangLevel = (name) => {
        setPickedLevel(name)
    }
    const changeActiveList = () => {
        setActiveList(prevState => !prevState)
    }

    const renderListItems = englishLevels.map(({ id, mark, name }) => {
        return (
            <LangLevelProvider key={id} value={changeLangLevel}>
                <ListItem mark={mark} name={name}>{mark} - {name}</ListItem>
            </LangLevelProvider>
        )
    })


    return (
        <Page>
            <Header name='Start learning English with us!'/>
            <Card>
                <CardTitle>Choose your English level</CardTitle>
                <ActiveListProvider value={changeActiveList}>
                    {!activeList && <Dropdown>{pickedLevel} <Span>&#x25BC;</Span></Dropdown>}
                    {activeList && <List>
                        {renderListItems}
                    </List>}
                </ActiveListProvider>
                <Label>
                    <ProgressBar prevValue={0} value={0} max={100} />
                </Label>
                <Button variant="right">&#10095;</Button>
            </Card>
        </Page>
    )
}

export default LevelPage
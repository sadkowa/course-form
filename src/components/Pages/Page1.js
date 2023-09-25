import React, { useState } from "react";

import { Page } from "./";
import { Card } from "../Card";
import { Button } from "../Button";
import { Label } from "../Label";
import { ProgressBar } from "../ProgressBar";
import { Header } from "../Header";
import { Img } from "../Img";
import { Heading } from "../Heading";
import { CardTitle } from "../Card/CardTitle";
import { List } from "../List";
import { ListItem } from "../List";
import { Dropdown } from "../Dropdown";
import { Span } from '../Span'

import { englishLevels } from "../../providers/data";

import { ActiveListContext } from "../../context/context";
import { LangLevelContext } from "../../context/context";


const Page1 = () => {
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
            <Header>
                <Heading>Let's start learning English with us!</Heading>
                <Img />
            </Header>
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
                <Button variant="right">{'>'}</Button>
            </Card>

        </Page>
    )
}

export default Page1
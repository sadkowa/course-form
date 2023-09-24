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
import { List } from "../List";
import { ListItem } from "../List";
import { Dropdown } from "../Dropdown";

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
        <LangLevelProvider value={changeLangLevel}>
            <ListItem key={id} mark={mark} name={name}>{mark} - {name}</ListItem>
        </LangLevelProvider>
    )
})


    // const dropdownContent= pickedLevel ? pickedLevel : `${englishLevels[0].mark} - ${englishLevels[0].name}`

    return (
        <Page>
            <Header>
                <Heading>Let's start learning English with us!</Heading>
                <Img />
            </Header>
            <Card>
                <CardTitle>Choose your English level</CardTitle>
                <ActiveListProvider value={changeActiveList}>
                    {!activeList && <Dropdown>{pickedLevel}&#x25BC;</Dropdown>}
                    {activeList && <List>
                    {renderListItems}
                </List>}
                </ActiveListProvider>
                <Label>
                    <ProgressBar value="33" max="100" />
                </Label>
                <Button variant="right">{'>'}</Button>
            </Card>

        </Page>
    )
}

export default Page1
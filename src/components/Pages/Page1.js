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

import { englishLevels } from "../../providers/data";
import { Dropdown } from "../Dropdown";

// import { ListContext } from "../../context/context";



const Page1 = () => {

    const [langLevel, setLangLevel] = useState(null)
    // const { Provider } = ListContext

    // const changeLangLevel = (name)=> {
    //     setLangLevel(name)
// }
const renderListItems = englishLevels.map(({ id, mark, name }) => {
    return <ListItem key={id}>{mark} - {name}</ListItem>
})


    return (
        <Page>
            <Header>
                <Heading>Let's start learning English with us!</Heading>
                <Img />
            </Header>
            <Card>
                <CardTitle>Choose your English level</CardTitle>
                {!langLevel && <Dropdown>{englishLevels[0].mark} - {englishLevels[0].name} <span style={{ marginLeft: '30px' }}>⇩</span></Dropdown>}
                {/* <Provider value={changeLangLevel}> */}
                {langLevel && <List>
                    {renderListItems}
                </List>}
                {/* </Provider> */}
                <Label>
                    <ProgressBar value="33" max="100" />
                </Label>
                <Button variant="right">{'>'}</Button>
            </Card>

        </Page>
    )
}

export default Page1
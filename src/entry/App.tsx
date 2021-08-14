import React from "react"
import { Provider } from "react-redux"
import { Global } from "@emotion/react"

import { RejectButton, StandardButton } from "../components/Buttons"
import { GlobalStyles } from "../config/globalStyles"
import store from "../config/redux/store"
import { AppContainer } from "./styled"
import Checkboxes from "../components/Checkboxes"
import { AppIntro } from "../components/Intro"
import { Header, LargeHeader, PageHeader, SectionHeader, SubHeader } from "../components/Headers/styled"
import { StandardContainer } from "../components/Containers"
import { Table } from "../components/Tables"
import { createSimpleConfig } from "../components/Tables/helper"

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Global styles={GlobalStyles} />
            <AppContainer>
                <StandardContainer>
                    <StandardButton>Кнопка</StandardButton>
                    <RejectButton>Отмена</RejectButton>
                    <Checkboxes
                        onChange={() => {}}
                        options={[
                            { key: "1", value: "1", label: "Ключ 1" },
                            { key: "2", value: "2", label: "Ключ 2" }
                        ]}
                        selected={["1"]}
                    />
                    <Checkboxes
                        multipleChoice
                        onChange={() => {}}
                        options={[
                            { key: "1", value: "1", label: "Ключ 1" },
                            { key: "2", value: "2", label: "Ключ 2" }
                        ]}
                        selected={["1"]}
                    />
                    <Table
                        config={
                            {
                                template: [
                                    ["0", "0", "2"],
                                    ["3", "4", "5"]
                                ],
                                cellsHeight: [50, 100],
                                cellsWidth: [50, 100, 100],
                                rowFractions: 2,
                                colFractions: 3,
                                content: { "2": "kek", "5": "lol" }
                            } /* createSimpleConfig(5, 7, 500, 200, { "0": "kek", "3": "lol" })*/
                        }
                    />
                </StandardContainer>
                {/* <DarkContainer>
          <StandardButton>Кнопка</StandardButton>
          <RejectButton>Отмена</RejectButton>
        </DarkContainer>
        <StandardButton>Кнопка</StandardButton>
        <RejectButton>Отмена</RejectButton> */}

                <PageHeader>Header</PageHeader>
                <SectionHeader>Header</SectionHeader>
                <LargeHeader>Header</LargeHeader>
                <Header>Header</Header>
                <SubHeader>Header</SubHeader>
            </AppContainer>
        </Provider>
    )
}

export default App

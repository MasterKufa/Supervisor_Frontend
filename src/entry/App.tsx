import React from "react"
import { Provider } from "react-redux"
import { Global } from "@emotion/react"
import ReactTooltip from "react-tooltip"
import { GlobalStyles } from "../config/globalStyles"
import store from "../apps/Supervisor/redux/store"
import { AppContainer } from "./styled"
import { BlockingLoader, ModalPortal } from "../components/Modals"
import { Supervisor } from "Supervisor/index"
import { Tooltip } from "components/Text/styled"
//import { NotificationsPortal } from "../components/Notifications"

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Global styles={GlobalStyles} />
            {/* <NotificationsPortal /> */}
            <BlockingLoader />
            <Tooltip />
            <ModalPortal />
            <AppContainer>
                <Supervisor />
            </AppContainer>
        </Provider>
    )
}

export default App

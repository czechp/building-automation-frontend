import React from "react";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import theme from "./configuration/style/theme";
import GlobalStyles from "./configuration/style/globalStyles";
import ContainerLayout from "./layout/ContainerLayout";
import TopBarLayout from "./layout/TopBarLayout";
import NavigationBarLayout from "./layout/NavigationBarLayout";
import LocationListPage from "./useCase/location/LocationListPage";
import LoginPage from "./useCase/login/LoginPage";
import {createStatementContext, useProvideStatementValues} from "./context/useStatementContext";

export const StatementContext = createStatementContext();

function App() {
    const value = useProvideStatementValues();

    return (<div className="App">
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <ContainerLayout>
                    <TopBarLayout/>
                    <NavigationBarLayout/>
                    <StatementContext.Provider value={value}>
                        <Routes>
                            <Route path="/" element={<LocationListPage/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                        </Routes>
                    </StatementContext.Provider>
                </ContainerLayout>
            </ThemeProvider>
        </BrowserRouter>
    </div>);
}

export default App;

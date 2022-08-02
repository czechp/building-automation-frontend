import React from "react";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import theme from "./configuration/style/theme";
import GlobalStyles from "./configuration/style/globalStyles";
import ContainerLayout from "./layout/ContainerLayout";
import TopBarLayout from "./layout/TopBarLayout";
import NavigationBarLayout from "./layout/NavigationBarLayout";
import LocationListPage from "./useCase/location/locationListPage/LocationListPage";
import LoginPage from "./useCase/login/loginPage/LoginPage";
import {createStatementContext, useProvideStatementValues} from "./context/useStatementContext";
import LoginRequirementPage from "./useCase/warningPages/LoginRequirementPage";
import LoginGuard from "./guard/LoginGuard";
import RegisterPage from "./useCase/register/registerPage/RegisterPage";
import ActivateAccountPage from "./useCase/register/activeAccountPage/ActivateAccountPage";
import StatementCmp from "./component/StatementCmp";

export const StatementContext = createStatementContext();

function App() {
    const statementContextValue = useProvideStatementValues();


    return (<div className="App">
        <ThemeProvider theme={theme}>

            <StatementContext.Provider value={statementContextValue}>
                <BrowserRouter>
                    <GlobalStyles/>
                    <ContainerLayout>
                        <TopBarLayout/>
                        <NavigationBarLayout/>
                        <Routes>
                            <Route path="/" element={
                                <LoginGuard login admin>
                                    <LocationListPage/>
                                </LoginGuard>
                            }/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/register" element={<RegisterPage/>}/>
                            <Route path="/activate-account" element={<ActivateAccountPage/>}/>
                            <Route path="/not-logged" element={<LoginRequirementPage/>}/>
                        </Routes>

                    </ContainerLayout>
                </BrowserRouter>
                <StatementCmp/>
            </StatementContext.Provider>
        </ThemeProvider>


    </div>);
}

export default App;

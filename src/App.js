import {ThemeProvider} from "styled-components";

import theme from "./configuration/theme";
import GlobalStyles from "./configuration/globalStyles";
import ContainerLayout from "./layout/ContainerLayout";
import TopBarLayout from "./layout/TopBarLayout";
import NavigationBarLayout from "./layout/NavigationBarLayout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LocationListPage from "./useCase/location/LocationListPage";
import LoginPage from "./useCase/login/LoginPage";

function App() {
    return (<div className="App">
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <ContainerLayout>
                    <TopBarLayout/>
                    <NavigationBarLayout/>
                    <Routes>
                        <Route path="/" element={<LocationListPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                    </Routes>
                </ContainerLayout>
            </ThemeProvider>
        </BrowserRouter>
    </div>);
}

export default App;

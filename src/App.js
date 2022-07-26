import {ThemeProvider} from "styled-components";
import theme from "./configuration/theme";
import GlobalStyles from "./configuration/globalStyles";
import ContainerLayout from "./layout/ContainerLayout";
import TopBarLayout from "./layout/TopBarLayout";
import NavigationBarLayout from "./layout/NavigationBarLayout";

function App() {
    return (<div className="App">
        <ThemeProvider theme={theme}>
        <GlobalStyles />
            <ContainerLayout>
                <TopBarLayout/>
                <NavigationBarLayout/>
            </ContainerLayout>
        </ThemeProvider>
    </div>);
}

export default App;

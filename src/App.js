import {ThemeProvider} from "styled-components";
import theme from "./configuration/theme";
import GlobalStyles from "./configuration/globalStyles";
import ContainerLayout from "./layout/ContainerLayout";
import TopBarLayout from "./layout/TopBarLayout";

function App() {
    return (<div className="App">
        <ThemeProvider theme={theme}>
        <GlobalStyles />
            <ContainerLayout>
                <TopBarLayout/>
            </ContainerLayout>
        </ThemeProvider>
    </div>);
}

export default App;

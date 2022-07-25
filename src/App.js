import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./configuration/theme";
import GlobalStyles from "./configuration/globalStyles";

function App() {
    return (<div className="App">
        <ThemeProvider theme={theme}>
        <GlobalStyles />
        </ThemeProvider>
    </div>);
}

export default App;

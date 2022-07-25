import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./configuration/theme";

function App() {
    return (<div className="App">
        <ThemeProvider theme={theme}>

        </ThemeProvider>
    </div>);
}

export default App;

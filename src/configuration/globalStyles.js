import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Roboto:wght@600&display=swap');
    font-size: 22px;
    color: ${({theme}) => theme.colors.primary};
  }
`;

export default GlobalStyles;
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }

  body, html {
    font-family: Arial, sans-serif;
    height: 100%;
  }

  ul li {
    list-style-type: none;
    list-style-image none;
    list-style-position outside;
  }
`;

export default GlobalStyle;

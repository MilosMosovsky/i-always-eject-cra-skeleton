import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body {
    font-family: 'Open Sans', sans-serif;
    background: #eee;
  }

  html, body {
    min-height: 100vh;
  }
`;

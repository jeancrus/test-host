import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    color: #9F9F9F;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  html,
  body,
  #root {
    height: 100%;
  }


  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }


  a {
    text-decoration: none;
  }


  ul {
    list-style: none;
  }


  button {
    cursor: pointer;
  }
`;

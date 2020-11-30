import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none !important;
  }

  ul {
    list-style: none;
  }

  body {
    background-color: #D3D3D3;
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    font: 16px Poppins, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;

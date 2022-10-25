import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size:16px;
  }
  h1,h2,h3,h4,h5,h6{
    padding:10px;
  }
  main{
    min-height:calc(100vh - 200px);
  }
`;

export default GlobalStyle;

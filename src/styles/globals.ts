import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body{
    background-color: #eee;
    font-family: 'Open Sans', sans-serif;
  }

  ul{
    padding: 0;
    margin:0;
  }

  li{
    list-style: none;
  }
`;

import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import Todo from './Todo';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: inherit;
    font: inherit;
  }
  html,
  body {
    font-family: 'Inter', sans-serif;
    height: 100%;
    background-color: #F5F5F5;
  }
  #root {
    height: 100%;
}
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle />
    <Todo />
  </>
);

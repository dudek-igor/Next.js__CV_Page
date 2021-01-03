import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', 'Helvetica', sans-serif;
  background-color: ${({ theme }) => theme.bodyColor};
  color: ${({ theme }) => theme.fontColor};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
ul{
  margin:0;
  padding:0;
  list-style: none;
}
`;

export default GlobalStyles;

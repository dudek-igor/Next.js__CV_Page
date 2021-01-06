import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Montserrat";
  src: url("/Montserrat-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}


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

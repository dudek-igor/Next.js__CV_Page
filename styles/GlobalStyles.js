import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

html,
body {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', 'Helvetica', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}`;

export default GlobalStyles;

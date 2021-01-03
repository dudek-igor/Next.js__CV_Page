import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';

// Theme
const theme = {
  bodyColor: '#f2f2f2',
  fontColor: '#191919;',
  iconsColor: '#a8a8a8',
};

const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>{children}</>
    </ThemeProvider>
  );
};

export default AppTheme;

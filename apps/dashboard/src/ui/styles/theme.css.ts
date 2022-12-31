import { createTheme } from '@vanilla-extract/css';

const [themeClass, theme] = createTheme({
  color: {
    white: '#FFFFFF',
    red: {
      200: '#FFABAD',
      400: '#D73035',
      800: '#8A1114',
    },
    gray: {
      100: '#FAFAFA',
      200: '#CCCCCC',
      300: '#999999',
      400: '#666666',
      500: '#333333'
    }
  }
});

export { themeClass }

export default theme;

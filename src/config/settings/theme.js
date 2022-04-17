import { createTheme } from '@material-ui/core/styles'
/**
 * App's theme
 * Relevant docs: https://v4.mui.com/customization/default-theme/#default-theme
 */

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#fffde7',
      dark: '#cccab5',
      contrastText: '#000'
    },
    secondary: {
      light: '#8b6b61',
      main: '#5d4037',
      dark: '#8b6b61',
      contrastText: '#fff'
    }
  },
  typography: {
    h4: {
      fontFamily: ['Bungee Inline', 'cursive'].join(',')
    },
    h5: {
      fontFamily: ['Bungee Inline', 'cursive'].join(',')
    },
    button: {
      fontFamily: ['Bungee Inline', 'cursive'].join(',')
    }
  }
})

export { theme }

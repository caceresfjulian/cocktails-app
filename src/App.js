import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './config/settings/theme'
import { SnackbarProvider } from './containers/SnackbarProvider/SnackbarProvider.container'
import { Router } from './Routes'

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router />
        <SnackbarProvider />
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App

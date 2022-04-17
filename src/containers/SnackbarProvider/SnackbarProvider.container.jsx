import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onCloseSnackbar } from './SnackbarProvider.actions'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

export const SnackbarProvider = () => {
  const dispatch = useDispatch()
  const { message, severity, showSnackbar } = useSelector(state => state.snackbarProvider)

  const handleCloseSnackbar = (_, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(onCloseSnackbar())
  }

  return (
    showSnackbar && (
      <Snackbar open={showSnackbar} onClose={handleCloseSnackbar} autoHideDuration={5000}>
        <Alert severity={severity} padding="6px 16px">
          {message}
        </Alert>
      </Snackbar>
    )
  )
}

import { CLOSE_SNACKBAR, SHOW_SNACKBAR } from './SnackbarProvider.actions'

const initialState = {
  message: '',
  severity: '',
  showSnackbar: false
}

const snackbarProviderReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case CLOSE_SNACKBAR: {
      return {
        ...state,
        message: '',
        severity: '',
        showSnackbar: false
      }
    }
    case SHOW_SNACKBAR: {
      return {
        ...state,
        message: payload.message,
        severity: payload.severity,
        showSnackbar: true
      }
    }
    default: {
      return state
    }
  }
}

export default snackbarProviderReducer

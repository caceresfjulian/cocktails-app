import { makeActionCreator } from '../../config/store/utils'

export const SHOW_SNACKBAR = 'SHOW_SNACKBAR'
export const onShowSnackbar = makeActionCreator(SHOW_SNACKBAR, 'payload')

export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR'
export const onCloseSnackbar = makeActionCreator(CLOSE_SNACKBAR)

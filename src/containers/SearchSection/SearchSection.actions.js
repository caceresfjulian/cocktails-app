import { makeActionCreator } from '../../config/store/utils'
import { getSearchByName } from '../../service/search'
import { onShowSnackbar } from '../SnackbarProvider/SnackbarProvider.actions'

/* Actions */
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM'
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS'
export const GET_SEARCH = 'GET_SEARCH'
export const GET_SEARCH_ERROR = 'GET_SEARCH_ERROR'
export const GET_SEARCH_SUCCESS = 'GET_SEARCH_SUCCESS'

/* Action creators */
export const onUpdateSearchTerm = makeActionCreator(UPDATE_SEARCH_TERM, 'payload')
export const onClearSearchResults = makeActionCreator(CLEAR_SEARCH_RESULTS)
export const onGetSearch = makeActionCreator(GET_SEARCH)
export const onGetSearchError = makeActionCreator(GET_SEARCH_ERROR, 'payload')
export const onGetSearchSuccess = makeActionCreator(GET_SEARCH_SUCCESS, 'payload')

/* Thunks */
export const onGetSearchThunk = searchTerm => async dispatch => {
  if (searchTerm.length !== 0) {
    dispatch(onGetSearch())
    try {
      const { drinks } = await getSearchByName(searchTerm)
      dispatch(onGetSearchSuccess(drinks))
      dispatch(onShowSnackbar({ message: 'successful search', severity: 'success' }))
    } catch (error) {
      dispatch(onGetSearchError(error.message))
      dispatch(onShowSnackbar({ message: error.message, severity: 'error' }))
    }
  } else {
    dispatch(onShowSnackbar({ message: "The search bar can't be empty.", severity: 'info' }))
  }
}

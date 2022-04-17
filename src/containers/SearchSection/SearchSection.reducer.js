import {
  CLEAR_SEARCH_RESULTS,
  GET_SEARCH,
  GET_SEARCH_ERROR,
  GET_SEARCH_SUCCESS,
  UPDATE_SEARCH_TERM
} from './SearchSection.actions'

const initialState = {
  searchTerm: '',
  results: null,
  isLoading: false,
  error: null
}

const searchSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload }
    case CLEAR_SEARCH_RESULTS:
      return { ...state, searchTerm: '', results: null }
    case GET_SEARCH:
      return { ...state, isLoading: true }
    case GET_SEARCH_ERROR:
      return { ...state, isLoading: false, error: action.payload }
    case GET_SEARCH_SUCCESS:
      return { ...state, results: action.payload, isLoading: false }
    default:
      return state
  }
}

export default searchSectionReducer

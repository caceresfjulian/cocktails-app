import { GET_DETAIL, GET_DETAIL_ERROR, GET_DETAIL_SUCCESS } from './DetailSection.actions'

const initialState = {
  detail: null,
  isLoading: false,
  error: null
}

const detailSectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DETAIL:
      return { ...state, isLoading: true }
    case GET_DETAIL_ERROR:
      return { ...state, isLoading: false, error: payload }
    case GET_DETAIL_SUCCESS:
      return { ...state, isLoading: false, detail: payload }
    default:
      return state
  }
}

export default detailSectionReducer

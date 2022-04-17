import { GET_CATEGORIES, GET_CATEGORIES_ERROR, GET_CATEGORIES_SUCCESS } from './CategoriesSection.actions'

const initialState = {
  categoriesList: null,
  isLoading: false,
  error: null
}

const categoriesSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, isLoading: true }
    case GET_CATEGORIES_ERROR:
      return { ...state, isLoading: false, error: action.payload }
    case GET_CATEGORIES_SUCCESS:
      return { categoriesList: action.payload, isLoading: false }
    default:
      return state
  }
}

export default categoriesSectionReducer

import { GET_DRINK, GET_DRINK_ERROR, GET_DRINK_SUCCESS } from './RandomCocktailSection.actions'

const initialState = {
  drink: null,
  isLoading: false,
  error: null
}

const randomCocktailSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRINK:
      return { ...state, isLoading: true }
    case GET_DRINK_ERROR:
      return { ...state, isLoading: false, error: action.payload }
    case GET_DRINK_SUCCESS:
      return { drink: action.payload, isLoading: false }
    default:
      return state
  }
}

export default randomCocktailSectionReducer

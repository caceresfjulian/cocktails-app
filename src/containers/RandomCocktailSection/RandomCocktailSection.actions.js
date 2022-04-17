import { makeActionCreator } from '../../config/store/utils'
import { getRandomCocktail } from '../../service/cocktails'

/* Actions */
export const GET_DRINK = 'GET_DRINK'
export const GET_DRINK_ERROR = 'GET_DRINK_ERROR'
export const GET_DRINK_SUCCESS = 'GET_DRINK_SUCCESS'

/* Action creators */
export const onGetDrink = makeActionCreator(GET_DRINK)
export const onGetDrinkError = makeActionCreator(GET_DRINK_ERROR, 'payload')
export const onGetDrinkSuccess = makeActionCreator(GET_DRINK_SUCCESS, 'payload')

/* Thunks */
export const onGetDrinkThunk = () => async dispatch => {
  dispatch(onGetDrink())
  try {
    const randomCocktail = await getRandomCocktail()
    dispatch(onGetDrinkSuccess(randomCocktail))
  } catch (error) {
    dispatch(onGetDrinkError(error.message))
  }
}

import { makeActionCreator } from '../../config/store/utils'
import { getCategories } from '../../service/categories'

/* Actions */
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'

/* Action creators */
export const onGetCategories = makeActionCreator(GET_CATEGORIES)
export const onGetCategoriesError = makeActionCreator(GET_CATEGORIES_ERROR, 'payload')
export const onGetCategoriesSuccess = makeActionCreator(GET_CATEGORIES_SUCCESS, 'payload')

/* Thunks */
export const onGetCategoriesThunk = () => async dispatch => {
  dispatch(onGetCategories())
  try {
    const categoriesList = await getCategories()
    dispatch(onGetCategoriesSuccess(categoriesList))
  } catch (error) {
    dispatch(onGetCategoriesError(error))
  }
}

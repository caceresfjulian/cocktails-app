import { makeActionCreator } from '../../config/store/utils'
import { getCocktailDetail } from '../../service/cocktails'

/* Actions */
export const GET_DETAIL = 'GET_DETAIL'
export const GET_DETAIL_ERROR = 'GET_DETAIL_ERROR'
export const GET_DETAIL_SUCCESS = 'GET_DETAIL_SUCCESS'

/* Action creators */
export const onGetDetail = makeActionCreator(GET_DETAIL)
export const onGetDetailError = makeActionCreator(GET_DETAIL_ERROR, 'payload')
export const onGetDetailSuccess = makeActionCreator(GET_DETAIL_SUCCESS, 'payload')

/* Thunks */
export const onGetDetailThunk = id => async dispatch => {
  dispatch(onGetDetail())
  try {
    const detail = await getCocktailDetail(id)
    dispatch(onGetDetailSuccess(detail))
  } catch (error) {
    dispatch(onGetDetailError(error.message))
  }
}

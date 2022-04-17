import { makeActionCreator } from '../../config/store/utils'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const onIncrement = makeActionCreator(INCREMENT)
export const onDecrement = makeActionCreator(DECREMENT)

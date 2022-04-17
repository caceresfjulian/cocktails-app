import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onDecrement, onIncrement } from './CounterSection.actions'

const CounterSection = () => {
  const dispatch = useDispatch()
  const { count } = useSelector(state => state.counterSection)

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch(onDecrement())}>-</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch(onIncrement())}>+</button>
    </div>
  )
}

export { CounterSection }

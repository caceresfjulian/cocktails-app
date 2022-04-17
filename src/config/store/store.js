import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const factoryStore = (initialState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)))

  return () => store
}

const storeSingleton = factoryStore()

export default storeSingleton

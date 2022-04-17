/**
 * Action Creators Generator
 *
 * Reference: https://redux.js.org/usage/reducing-boilerplate#generating-action-creators
 */
export const makeActionCreator = (type, ...argNames) => {
  return function (...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

import { createStore } from 'redux'

let initialState = { value: 0, showCounter: true };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, value: state.value + 1}
    case 'increase':
      return {...state, value: state.value + action.amount}
    case 'decrement':
      return {...state, value: state.value - 1}
    case 'toggle':
      return {...state, showCounter: !state.showCounter}
    default:
      return state
  }
}

const store = createStore(counterReducer)

export default store;
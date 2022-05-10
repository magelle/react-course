import {useReducer, useState} from "react";

const initialInputState = {
  value: '',
  isTouched: false
};
const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') return {...state, value: action.value}
  if (action.type === 'BLUR') return {...state, isTouched: true}
  if (action.type === 'RESET') return initialInputState
  return initialInputState;
}


const useInput = (validateValue) => {
  const [{value, isTouched}, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validateValue(value)
  const hasError = !valueIsValid && isTouched

  const valueChangeHandler = (event) => dispatch({type: 'INPUT', value: event.target.value})
  const inputBlurHandler = (event) => dispatch({type: 'BLUR'})
  const reset = () => dispatch({type: 'RESET'})

  return {
    value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }
}

export default useInput;
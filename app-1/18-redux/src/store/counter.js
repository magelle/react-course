import {createSlice} from "@reduxjs/toolkit";

let initialCounterState = {value: 0, showCounter: true};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state, _action) {
      state.value++
    },
    decrement(state, _action) {
      state.value--
    },
    increase(state, {payload}) {
      state.value += payload
    },
    toggle(state, _action) {
      state.showCounter = !state.showCounter
    },
  }
});

export const counterActions = counterSlice.actions
import { createReducer } from "@reduxjs/toolkit";
import { decrement, increment, reset } from "./actions";

const initialState = {
  counter: 0,
  step: 1,
};

// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case increment.type:
//       return {
//         ...state,
//         counter: state.counter + state.step,
//       };

//     case decrement.type:
//       return {
//         ...state,
//         counter: state.counter - state.step,
//       };

//     case reset.type:
//       return initialState;

//     default:
//       return state;
//   }
// };

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.counter += state.step;
    })
    .addCase(decrement, (state, action) => {
      state.counter -= state.step;
    })
    .addCase(reset, (state, acton) => initialState);
});

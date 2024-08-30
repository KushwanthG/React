
// export const SET_NAME = 'SET_NAME';
// export const SET_EMAIL = 'SET_EMAIL';
// export const SET_MESSAGE = 'SET_MESSAGE';
// export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
// export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
// export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// export const setName = (name) => ({ type: SET_NAME, payload: name });
// export const setEmail = (email) => ({ type: SET_EMAIL, payload: email });
// export const setMessage = (message) => ({ type: SET_MESSAGE, payload: message });

// export const fetchData = () => {
//   return async (dispatch) => {
//     dispatch({ type: FETCH_DATA_REQUEST });
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//       const data = await response.json();
//       dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
//     }
//   };
// };


// // src/features/counter/counterSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   value: 0,
// };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export default counterSlice.reducer;

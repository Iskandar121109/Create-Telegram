import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    bgDark: false,
}

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const setBgDark = createAction('SET_BG_DARK');


export default createReducer(initialState, {
    [increment]: function (state) {
        state.count = state.count + 1
    },
    [decrement]: function (state) {
        state.count = state.count - 1
    },
    [setBgDark]: function (state) {
        state.bgDark = !state.bgDark
    }
})
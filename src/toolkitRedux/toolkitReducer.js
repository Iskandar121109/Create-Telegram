import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    bgDark: false,
}

export const setBgDark = createAction('SET_BG_DARK');

export default createReducer(initialState, {
    [setBgDark]: function (state) {
        state.bgDark = !state.bgDark
    }
})
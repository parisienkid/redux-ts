import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    errors: {}
}

const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        createAlert: (state, action) => {
            state.errors = {};
            for (let key in action.payload) {
                state.errors[key] = action.payload[key];
            }
        },
    }
});

const {reducer, actions} = alertSlice;

export default reducer;

export const {
    createAlert
} = actions;
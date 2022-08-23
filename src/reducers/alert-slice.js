import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    errors: [],
    alertStatus: 'idle',
}

const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        createAlert: (state, action) => {
            state.errors = action.payload;
            state.alertStatus = 'loading';
        },
        updateAlert: state => {
            state.errors = [];
            state.alertStatus = 'idle';
        },
    }
});

const {reducer, actions} = alertSlice;

export default reducer;

export const {
    createAlert,
    updateAlert,
} = actions;
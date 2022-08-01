import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nav: 'главная',
    burger: false,
};

const nav = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        navChange: (state, action) => {state.nav = action.payload},
        burgerChange: state => {state.burger = !state.burger},
    }
})

const {reducer, actions} = nav;

export default reducer;
export const {navChange, burgerChange, navClear} = actions;


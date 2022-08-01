import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lang: 'ru'
};


const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        langChange: (state, action) => {state.lang = action.payload}
    }
})

const {reducer, actions} = langSlice;

export default reducer;
export const {langChange} = actions;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    statusGameData: "idle",
    statusPostsData: "idle",
    dataGame: [],
    dataPosts: [],
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        dataGameFetching: state => {state.statusGameData = "loading"},
        dataGameFetched: (state, action) => {
            state.dataGame = action.payload;
            state.statusGameData = 'idle';
        },
        dataGameFetchingError: state => {state.statusGameData = "error"},
        dataPostsFetching: state => {state.statusPostsData = "loading"},
        dataPostsFetched: (state, action) => {
            state.dataPosts = action.payload;
            state.statusPostsData = 'idle';
        },
        dataPostsFetchingError: state => {state.statusPostsData = "error"}
    }
});

const {reducer, actions} = dataSlice;

export default reducer;

export const {
    dataGameFetching,
    dataGameFetched,
    dataGameFetchingError,
    dataPostsFetching,
    dataPostsFetched,
    dataPostsFetchingError,
} = actions;
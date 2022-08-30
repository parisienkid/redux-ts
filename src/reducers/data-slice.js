import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    statusGameData: "idle",
    dataGame: [],
    statusPostsData: "idle",
    dataPosts: [],
    statusNavData: "idle",
    nav: {},
    statusMainData: "idle",
    main: {},
    statusAboutData: "idle",
    about: {},
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        dataGameFetching: state => {state.statusGameData = "loading"},
        dataGameFetched: (state, action) => {
            state.dataGame = action.payload.games;
            state.statusGameData = 'idle';
        },
        dataGameFetchingError: state => {state.statusGameData = "error"},
        dataPostsFetching: state => {state.statusPostsData = "loading"},
        dataPostsFetched: (state, action) => {
            state.dataPosts = action.payload.posts;
            state.statusPostsData = 'idle';
        },
        dataPostsFetchingError: state => {state.statusPostsData = "error"},
        dataNavFetching: state => {state.statusNavData = "loading"},
        dataNavFetched: (state, action) => {
            state.dataNav = action.payload.nav;
            state.statusNavData = 'idle';
        },
        dataNavError: state => {state.statusGameData = "error"},
        dataMainFetching: state => {state.statusMainData = "loading"},
        dataMainFetched: (state, action) => {
            state.dataMain = action.payload.main;
            state.statusMainData = 'idle';
        },
        dataMainFetchingError: state => {state.statusMainData = "error"},
        dataAboutFetching: state => {state.statusMainData = "loading"},
        dataAboutFetched: (state, action) => {
            state.dataAbout = action.payload.about;
            state.statusAboutData = 'idle';
        },
        dataAboutFetchingError: state => {state.statusAboutData = "error"}
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
    dataAboutFetching,
    dataAboutFetched,
    dataAboutFetchingError,
    dataMainFetching,
    dataMainFetched,
    dataMainFetchingError,
    dataNavFetching,
    dataNavFetched,
    dataNavError,
} = actions;
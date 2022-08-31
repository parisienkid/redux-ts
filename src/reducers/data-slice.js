import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ruStatusData: "none",
    ruDataGames: [],
    ruNav: {},
    ruMain: {},
    ruAbout: {},
    ruExtra: {},
    ruFooter: {},
    ruContact: {},
    ruAlert: {},
    ruDataPosts: [],
    enStatusData: "none",
    enDataGames: [],
    enNav: {},
    enMain: {},
    enAbout: {},
    enExtra: {},
    enFooter: {},
    enContact: {},
    enAlert: {},
    enDataPosts: [],
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        dataRuFetching: state => {state.ruStatusData = "loading"},
        dataRuFetched: (state, action) => {
            state.ruDataGames = action.payload.games;
            state.ruNav = action.payload.nav;
            state.ruMain = action.payload.main;
            state.ruAbout = action.payload.about;
            state.ruExtra = action.payload.extra;
            state.ruFooter = action.payload.footer;
            state.ruContact = action.payload.contact;
            state.ruAlert = action.payload.alert;
            state.ruDataPosts = action.payload.posts;
            state.ruStatusData = 'idle';
        },
        dataEnFetching: state => {state.enStatusData = "loading"},
        dataEnFetched: (state, action) => {
            state.enDataGames = action.payload.games;
            state.enNav = action.payload.nav;
            state.enMain = action.payload.main;
            state.enAbout = action.payload.about;
            state.enExtra = action.payload.extra;
            state.enFooter = action.payload.footer;
            state.enContact = action.payload.contact;
            state.enAlert = action.payload.alert;
            state.enDataPosts = action.payload.posts;
            state.enStatusData = 'idle';
        },
        dataenFetchingError: state => {state.enStatusData = "error"},
    }
});

const {reducer, actions} = dataSlice;

export default reducer;

export const {
    dataRuFetching,
    dataRuFetched,
    dataRuFetchingError,
    dataEnFetching,
    dataEnFetched,
    dataEnFetchingError,
} = actions;
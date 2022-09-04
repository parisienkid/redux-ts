import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http-hook";

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

export const fetchRuData = createAsyncThunk(
    'data/fetchRuData',
    async () => {
        const {request} = useHttp();
        return await request(`http://localhost:3001/ru`);
    }
);

export const fetchEnData = createAsyncThunk(
    'data/fetchEnData',
    async () => {
        const {request} = useHttp();
        return await request(`http://localhost:3001/en`);
    }
)

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRuData.pending, state => {state.ruStatusData = "loading"})
            .addCase(fetchRuData.fulfilled, (state, action) => {
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
            })
            .addCase(fetchRuData.rejected, state => {state.ruStatusData = "error"})
            .addCase(fetchEnData.pending, state => {state.enStatusData = "loading"})
            .addCase(fetchEnData.fulfilled, (state, action) => {
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
            })
            .addCase(fetchEnData.rejected, state => {state.enStatusData = "error"})
    }
});

const {reducer} = dataSlice;

export default reducer;

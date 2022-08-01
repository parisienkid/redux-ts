import { configureStore } from "@reduxjs/toolkit";
import lang  from '../reducers/lang-slice';
import nav from '../reducers/nav-slice';
import data from '../reducers/data-slice';


const store = configureStore({
    reducer: {lang, nav, data},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;
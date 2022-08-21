import { configureStore } from "@reduxjs/toolkit";
import lang  from '../reducers/lang-slice';
import nav from '../reducers/nav-slice';
import data from '../reducers/data-slice';
import alert from '../reducers/alert-slice';


const store = configureStore({
    reducer: {lang, nav, data, alert},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;
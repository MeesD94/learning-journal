/**
 * This is a more elaborate example using the Redux Toolkit.
 */
import { rootReducer } from "./reducers.js";
import {
    incrementWithAmount,
    decrementCounter,
    incrementCounter,
    decrementWithAmount,
    loginAction,
    logoutAction
} from "./actions.js";

import * as toolkitRaw from '@reduxjs/toolkit';
const { configureStore } = toolkitRaw.default ?? toolkitRaw;


// Declaring the store.
const store = configureStore({
    reducer: rootReducer
});

store.subscribe(() => console.log(store.getState()));


store.dispatch(incrementCounter());// count: 1
store.dispatch(incrementCounter());// count: 2
store.dispatch(incrementCounter());// count: 3
store.dispatch(incrementCounter());// count: 4
store.dispatch(decrementCounter());// count: 3
store.dispatch(incrementWithAmount(3));// count: 6
store.dispatch(decrementWithAmount(5));// count: 1

store.dispatch(loginAction());// authenticated: true
store.dispatch(logoutAction());// authenticated: false



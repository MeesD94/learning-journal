/**
 * Reducers file containing every reducer
 * exports root reducer.
 */
import {
    DECREMENT,
    INCREMENT_WITH,
    DECREMENT_WITH, INCREMENT
} from "./constants.js";
import * as toolkitRaw from '@reduxjs/toolkit';
const { combineReducers, createReducer, createAction } = toolkitRaw.default ?? toolkitRaw;

/**
 * This reducer is created using the "builder callback" notation.
 * This method is preferred by the redux toolkit documentation.
 */
const counterReducer = createReducer( { count: 0 }, (builder) => {
    builder
        .addCase(INCREMENT, (state, action) => {
            state.count++
        })
        .addCase(DECREMENT, (state, action) => {
            state.count--
        })
        .addCase(INCREMENT_WITH, (state, action) => {
            state.count += action.payload
        })
        .addCase(DECREMENT_WITH, (state, action) => {
            state.count -= action.payload
        })
        .addDefaultCase((state, action) => {})
});

/**
 * This reducer is created using the "Map Object" notation.
 */
const authReducer = createReducer({ authenticated: false },
    {
        LOGIN: (state, action) => {
            return {
                authenticated: true
            }
        },
        LOGOUT: (state, action) => {
            return {
                authenticated: false
            }
        },
    },
    [],
    (state) => {
    state.authenticated = false
    }
);

/**
 * Create one root reducer to give to the create store method.
 */
export const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
});
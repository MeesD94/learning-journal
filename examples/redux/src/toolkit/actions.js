import {DECREMENT, DECREMENT_WITH, INCREMENT, INCREMENT_WITH, LOGIN, LOGOUT} from "./constants.js";
import * as toolkitRaw from '@reduxjs/toolkit';
const { createAction} = toolkitRaw.default ?? toolkitRaw;

export const incrementCounter = createAction(INCREMENT);
export const decrementCounter = createAction(DECREMENT);
export const incrementWithAmount = createAction(INCREMENT_WITH);
export const decrementWithAmount = createAction(DECREMENT_WITH);

export const loginAction = createAction(LOGIN);
export const logoutAction = createAction(LOGOUT);
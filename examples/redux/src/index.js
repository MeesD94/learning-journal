/**
 * This example uses "plain" redux.
 * These patterns are much harder to use then when using Redux Toolkit.
 * Plain redux is used in this example to understand the basics better.
*/

// Import the needed modules/functions
import {createStore} from "redux";

//Declare constants.
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_WITH = 'INCREMENT_WITH';

/**
 * Create an action without data.
 */
const incrementAction = {
    type: INCREMENT
}

const decrementAction = {
    type: DECREMENT
}

/**
 * Create an action with data.
 * @param {number} number The number that should be added to the store.
 */
const incrementWithAction = (number) => {
    return {
        type: INCREMENT_WITH,
        data: number
    }
}

/**
 * Create a reducer that is needed to create the store.
 *
 * @param {Object} state The state of the store.
 * @param {Object} action Action the reducer must perform.
 * @return {Object} modified state
*/
function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        case INCREMENT_WITH:
            return state + action.data
        default:
            return state
    }
}


/**
 * Create redux store with the counter reducer.
 *
 * @type {Store<unknown, Action>}
 */
const store = createStore(counter);

/**
 * Subscribe to the store.
 * The getState methode is called everytime there is an action dispatched.
 */
store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementAction); // 1
store.dispatch(incrementAction); // 2
store.dispatch(decrementAction); // 1
store.dispatch(incrementWithAction(5)) // 6

# Redux Store

Redux is a state management framework that can be used with a number of different web technologies.<br>
In Redux, there is a single state object that's responsible for the entire state of your application. This means if you
had a React app with ten components, and each component had its own local state, the entire state of your app would be 
defined by a single state object housed in the Redux store. This is the first important principle to understand when
learning Redux: the Redux store is the single source of truth when it comes to application state.

## Create a store
The Redux store is an object which holds and manages application state. There is a method called `createStore()` on the
Redux object, which you use to create the Redux store. This method takes a `reducer` function as a required argument.

```javascript
import { createStore } from 'redux'

// Redux methods are available from a Redux object or imported from 'redux'
const store = createStore(reducer);
```

---

## State
The state refers to the data that represents the current state of your application. It is a plain JavaScript object 
that holds the data necessary for your application to function.<br>
The state object should be structured in a way that represents the different parts or slices of your application's data. 
Each slice of the state corresponds to a specific feature or domain of your application.

```javascript
// The initial state of the store.
const state = {
    count: 0,
    turn: 0
};
```

This example has a state with two properties: `count` and `turn`. The 0 represent the initial data that 
the store holds.<br>

The Redux store is read-only, This means that the data can not be updated. The only way to change the state is by 
`dispatching` an `action`, which ar then handled by a `reducer` to produce a new state.

#### Get the state
The Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the 
current state held in the Redux store object with the `getState()` method.

```javascript
const store = Redux.createStore(
  (state = 5) => state
);

const currentState = store.getState(); // 5
```

---

## Reducer
A `reducer` is a function that takes in the current `state` and an `action`, and returns the next `state` of the application.

A `reducer` is responsible for specifying how the application's `state` should change in response to different `actions` 
dispatched in the system. It follows the principles of immutability, meaning that it doesn't modify the existing state 
directly but instead creates a new state object that reflects the desired changes.

```javascript
// A Simple reducer that returns a state.
const reducer = (state) => {
  return state;
}
```

```javascript
// A  bit more complex reducer that checks which action is called and returns a new state object.
const counterReducer = (state = initialState, action) => {
    switch (action.type) { // 
        case 'INCREMENT':
            return {
                ...state, // The spread operator '...' copies all or part of the existing state object.  
                count: action.count + 1 // Replace the count item with a new one.
            };
        case 'DECREMENT':
            return {
                ...state,
                count: action.count - 1
            };
        default:
            return state;
    }
};
```
#### Combine reducers
When the state of your app begins to grow more complex, it may be tempting to divide `state` into multiple pieces instead.
Remember that all app state is held in a single `state object` in the `store`. Therefore, Redux provides `reducer composition`
as a solution for a complex state model. You define multiple reducers to handle different pieces of your 
application's state, then compose these reducers together into one `root reducer`. The root reducer is then passed into 
the Redux `createStore()` method.

```javascript
import { createStore, combineReducers } from 'redux';

// Reducers for different slices of the state
const taskReducer = (state = [], action) => {
    // Reducer logic for tasks
    return state;
};

const userReducer = (state = {}, action) => {
    // Reducer logic for users
    return state;
};

// Combine the reducers into a root reducer
const rootReducer = combineReducers({
    tasks: taskReducer,
    users: userReducer
});

// Create the Redux store with the root reducer
const store = createStore(rootReducer);
```

---

## Action
Since Redux is a state management framework, updating state is one of its core tasks. In Redux, all state updates are
triggered by `dispatching actions`. An action is simply a `JavaScript object` that contains information about an action 
event that has occurred. The Redux store receives these action objects, then updates its state accordingly. Sometimes 
a Redux action also carries some data. For example, the action carries a username after a user logs in. While the data
is optional, actions must carry a `type` property that specifies the 'type' of action that occurred.

```javascript
const LOGIN = 'LOGIN';
const INCREMENT = 'INCREMENT';

// Action that carries no data.
const loginAction = {
    type: LOGIN
};

// Action that carries data
const incrementAction = {
    type: INCREMENT,
    payload: {
        value: 1
    }
};
```

The type properties are set to `'LOGIN''` and `'INCREMENT''`, this indicates intentions to perform certain operations.
The `incrementAction` also has the property `payload` which contains additional data related to that action. In this case 
the value by which the state should be incremented.

#### Send data with an action to the store
To send data along with your actions, you can create an arrow function with an argument. This argument can be set inside 
the return object alongside the type.

```javascript
const ADD_NOTE = 'ADD_NOTE';

const addNoteText = (note) => {
  return {
      type: ADD_NOTE,
      text: note 
    };
};
```

---
## Dispatch
the `dispatch` is used to send `actions` to the store, triggering the process of updating the application state.
The dispatch function accepts an action object as its parameter and forwards that action to the appropriate `reducer`.
The reducers then handle the action and update the state based on the logic defined within them.

```javascript
const ADD_NOTE = 'ADD_NOTE';

const addNoteText = (note) => {
    return {
        type: ADD_NOTE,
        text: note
    };
};

store.dispatch(addNoteText('This is a note'));
```

---

## Listeners

#### Subscribe
The `store.subscribe()` method is used to add a listener function that gets called whenever the state in the Redux store
changes. It allows components or other parts of your application to be notified of state updates and respond accordingly.

The `subscribe()` method takes a listener function as its argument. The listener function will be invoked whenever 
there is a state change in the store. The listener does not receive any parameters, but it can access the current state
by calling `store.getState()`.

```javascript
const store = createStore(reducer);

const listener = () => {
  const state = store.getState();
  console.log('Current state:', state);
  // Perform additional actions based on the state change
};

store.subscribe(listener);
```

#### Unsubscribe
It's important to note that `store.subscribe()` returns a function that can be used to unsubscribe the listener when it 
is no longer needed. Calling the returned `unsubscribe()` function will remove the listener from being notified of state changes.

```javascript
const unsubscribe = store.subscribe(listener);

// Later, to unsubscribe the listener
unsubscribe();
```

Unsubscribing the listener is useful when components are unmounted or when you no longer need to listen for state changes.
It helps prevent memory leaks and unnecessary updates.


## Middleware
To apply middleware to the Redux store and add additional functionality, you can use the applyMiddleware() function 
provided by Redux. Middleware intercepts the actions dispatched to the store before they reach the reducers, allowing 
you to modify or enhance the behavior of the store.

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Example middleware

const rootReducer = (state, action) => {
  // Reducer logic
};

const store = createStore(rootReducer, applyMiddleware(thunk));
```

By applying middleware to the store, you can achieve a variety of functionalities, such as:

- Logging: Middleware can log actions, state changes, or other information for debugging purposes or logging application behavior. 
- Asynchronous Operations: Middleware can handle asynchronous tasks, such as making API requests, by intercepting actions and dispatching additional actions based on the results. 
- Modifying Actions: Middleware can modify or transform actions before they reach the reducers, allowing you to add additional data, conditionally dispatch actions, or implement custom behavior.

To add additional middleware, you can simply pass them as arguments to applyMiddleware():
```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; // Another example middleware

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
```

In this example, both thunk and logger middleware are applied to the store. The order of middleware matters as they are 
executed in the order they are passed to applyMiddleware().

#### Custom middleware
you can create your own middleware for Redux. Custom middleware allows you to add specific functionality or behavior to the Redux store based on your application's requirements.

Middleware in Redux is essentially a function that takes three arguments: `store`, `next`, and `action`. It intercepts actions 
dispatched to the store and can modify, dispatch new actions, or perform other operations before passing them along 
to the next middleware or reducers.

```javascript
const myCustomMiddleware = (store) => (next) => (action) => {
  // Perform any custom logic or operations before the action reaches the reducer

  // You can access the current state using store.getState()
  const currentState = store.getState();

  // You can dispatch additional actions based on conditions
  if (action.type === 'SOME_ACTION') {
    store.dispatch({ type: 'ANOTHER_ACTION', payload: 'Some data' });
  }

  // Call next(action) to pass the action to the next middleware or reducers
  const result = next(action);

  // Perform any custom logic or operations after the action has been processed

  return result;
};
```

By creating your own middleware, you have full control over the behavior of the store and can add custom functionality, 
such as authentication handling, caching, analytics, or any other application-specific requirements.

#### source
- [freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries/#redux)
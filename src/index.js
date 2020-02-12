import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux' //We need this and thunk to use a middleware

import App from './components/App'
import reducers from './reducers';
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(thunk)) //hooking up middleware to store. When we dispatch an action, it gets routed through middleware, so we can return a function as a payload????


ReactDOM.render(
    <Provider store ={store}> {/* creating the provider component and passing in the store with reducers*/}
    <App/>
    </Provider>,
    document.querySelector('#root')
);
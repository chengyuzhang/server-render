/**
 * Created by Nelson on 2016/11/28.
 */

import './static/css/index.less'
import React from 'react';
import { render } from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import {Router, browserHistory} from 'react-router';
import todoApp from './reducers/reducers';
import routes from './router/router';

var initialState = window.__INITIAL_STATE__;

//var initialState={
//    getList:{
//        didInvalidate: false,
//        isFetching: true
//    },
//    todos:[],
//    visibilityFilter: "SHOW_ALL",
//}

const store = createStore(todoApp, initialState, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    //console.log('abc:',store.getState(),':',new Date().getTime())
});

render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
    </Provider>,
    document.querySelector('#app')
)

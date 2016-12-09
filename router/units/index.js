/**
 * Created by Nelson on 2016/11/29.
 */
const express = require('express');
const router = express.Router();

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../reducers/reducers';
import { Router, Route, browserHistory} from 'react-router';
import {getData} from '../../actions/actions';
import App from '../../containers/App';
import routes from '../../router/router';

router.get('/',handleRender);


function handleRender(req, res) {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );

    Promise.all([store.dispatch(getData({}))])
    .then(()=>{
        const html = renderToString(
            <Provider store={store}>
                <Router routes={routes} history={browserHistory}/>
            </Provider>
        );

        res.send(renderFullPage(html,store.getState()));
    }).catch(e=>{
        console.log('errorrrrrr:',e);
    });
}

function renderFullPage(html, initialState) {

    console.log('server:',new Date().getTime());

    return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Redux</title>
        <link href="http://127.0.0.1:3000/dist/css/app.css" rel="stylesheet">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>

      </body>
    </html>
    `
}

export default router;

//<link href="http://127.0.0.1:3000/dist/css/app.css" rel="stylesheet"></head>
//<script src="http://127.0.0.1:3000/dist/js/bundle.js"></script>
/**
 * Created by Nelson on 2016/11/28.
 */
import path from 'path';
import express from 'express';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.node.dev.js';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/reducers';
import { Router, Route, browserHistory,match,RouterContext} from 'react-router';
import {getData} from '../actions/actions';
import App from '../containers/App';
import routes from '../router/router';

const app = new express();
const port = 3000;

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(path.resolve(__dirname, '..'),'')));
//console.log('__dirname:',path.join(path.resolve(__dirname, '..'),''));
//app.use(express.static(path.join(__dirname, ''), {index: false}))

app.get('*',(req, res) => {
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {

        //console.log('url:',req.url);

        if (err) {
            res.status(500).end(`Internal Server Error ${err}`);
        } else if (redirectLocation) {
            res.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            handleRender(req, res, renderProps);
        } else {
            res.status(404).end('Not found');
        }
    });
});

function handleRender(req, res,renderProps) {

    const store = createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );

    Promise.all([store.dispatch(getData({}))])
        .then(()=>{
            const html = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
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
        <script src="http://127.0.0.1:3000/dist/js/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});

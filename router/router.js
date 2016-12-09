/**
 * Created by Nelson on 2016/11/29.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import List from '../components/List';
//module.exports = (
//    <Route path="/" component={App} />
//);

const routes=
    <Route path="/" component={App} >
        <IndexRoute component={List}/ >
    </Route>;

export default routes;
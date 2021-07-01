import React from 'react';
import ReactDOM from 'react-dom';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';

import { App } from './containers/app';
import { rootEpic } from './epics';
import createReducer from './reducer';

const DEBUG = true;

const reducer = createReducer();
const epicMiddleware = createEpicMiddleware();
const middleware = applyMiddleware(epicMiddleware);

const composeEnhancers = (DEBUG && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, undefined, composeEnhancers(middleware));

epicMiddleware.run(rootEpic);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

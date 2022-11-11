import { applyMiddleware, createStore, Middleware } from 'redux';

import { createReduxHistoryContext } from 'redux-first-history';
import { createHashHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import ownMiddlewares from './middlewares';
import reducers from './reducers';
import sagas from './sagas';

const composeEnhancers = composeWithDevTools({});

const INITIAL_STATE = {};

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createHashHistory(), // to replace with createBrowserHistory
    //other options if needed
  });

const middlewares: Middleware[] = [
  ...ownMiddlewares,
  sagaMiddleware,
  routerMiddleware,
];

export const store = createStore(
  reducers(routerReducer),
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const history = createReduxHistory(store);

sagaMiddleware.run(sagas);

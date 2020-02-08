import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import createDebounce from 'redux-debounced';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

let persistor = null;

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const debounceMiddleware = createDebounce();

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
    debounceMiddleware,
  ];

  const enhancers = [applyMiddleware(...middlewares)];
  const mainReducer = persistReducer(persistConfig, createReducer());

  const store = createStore(
    mainReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  persistor = persistStore(store);

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}

export { persistor };

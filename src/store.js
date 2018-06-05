import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { seamlessImmutableReconciler, seamlessImmutableTransformer } from 'redux-persist-seamless-immutable';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import Reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformer],
};

const persistedReducer = persistReducer(persistConfig, Reducers);

/* eslint-disable no-underscore-dangle */
export const Store = createStore(
  persistedReducer, /* preloadedState, */
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

export const Persistor = persistStore(Store);

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
  whitelist: ['user', 'shoppingCart'],
};

const persistedReducer = persistReducer(persistConfig, Reducers);

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export const Store = createStore(
  persistedReducer, /* preloadedState, */
  composeEnhancers(applyMiddleware(thunk)),
);

export const Persistor = persistStore(Store);

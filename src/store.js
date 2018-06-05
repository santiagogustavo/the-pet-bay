import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';

/* eslint-disable no-underscore-dangle */
export default createStore(
  Reducers, /* preloadedState, */
  compose(applyMiddleware(thunk)),
);
/* eslint-enable */

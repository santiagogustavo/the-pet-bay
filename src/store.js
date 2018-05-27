import { createStore } from 'redux';
import Reducers from './reducers';

/* eslint-disable no-underscore-dangle */
export default createStore(
  Reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

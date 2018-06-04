import { combineReducers } from 'redux';
import signIn from './signIn';
import user from './user';

export default combineReducers({
  signIn,
  user,
});

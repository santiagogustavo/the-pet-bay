import { combineReducers } from 'redux';
import passwordRecovery from './passwordRecovery';
import signIn from './signIn';
import user from './user';

export default combineReducers({
  passwordRecovery,
  signIn,
  user,
});

import { combineReducers } from 'redux';
import passwordRecovery from './passwordRecovery';
import signIn from './signIn';
import signUp from './signUp';
import user from './user';
import pets from './pets';

export default combineReducers({
  passwordRecovery,
  signIn,
  signUp,
  user,
  pets,
});

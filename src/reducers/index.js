import { combineReducers } from 'redux';
import editAccount from './editAccount';
import editPet from './editPet';
import landingPage from './landingPage';
import myAgenda from './myAgenda';
import myPets from './myPets';
import newPet from './newPet';
import passwordRecovery from './passwordRecovery';
import pet from './pet';
import product from './product';
import services from './services';
import shop from './shop';
import shoppingCart from './shoppingCart';
import signIn from './signIn';
import signUp from './signUp';
import user from './user';

export default combineReducers({
  editAccount,
  editPet,
  landingPage,
  myAgenda,
  myPets,
  newPet,
  passwordRecovery,
  pet,
  product,
  services,
  shop,
  shoppingCart,
  signIn,
  signUp,
  user,
});

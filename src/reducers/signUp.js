import Immutable from 'seamless-immutable';

const initialState = Immutable({
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  errors: {},
  isFetching: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP/CHANGE_NAME':
      return state.setIn(['name'], action.payload).setIn(['errors', 'name'], '');
    case 'SIGN_UP/CHANGE_EMAIL':
      return state.setIn(['email'], action.payload).setIn(['errors', 'email'], '');
    case 'SIGN_UP/CHANGE_PASSWORD':
      return state.setIn(['password'], action.payload).setIn(['errors', 'password'], '');
    case 'SIGN_UP/CHANGE_PASSWORD_CONFIRMATION':
      return state.setIn(['passwordConfirmation'], action.payload).setIn(['errors', 'passwordConfirmation'], '');
    case 'SIGN_UP/TOGGLE_FETCH':
      return state.setIn(['isFetching'], !state.isFetching);
    case 'SIGN_UP/SUBMIT_FORM/SUCCESSFULL_SUBMIT':
      return initialState;
    case 'SIGN_UP/SUBMIT_FORM/FAILED_SUBMIT':
      return state.setIn(['errors'], action.payload);
    default:
      return state;
  }
};

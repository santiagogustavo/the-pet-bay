import Immutable from 'seamless-immutable';

const initialState = Immutable({
  email: '',
  password: '',
  errors: {},
  isFetching: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN/CHANGE_EMAIL':
      return state.setIn(['email'], action.payload).setIn(['errors', 'email'], '');
    case 'SIGN_IN/CHANGE_PASSWORD':
      return state.setIn(['password'], action.payload).setIn(['errors', 'password'], '');
    case 'SIGN_IN/TOGGLE_FETCH':
      return state.setIn(['isFetching'], !state.isFetching);
    case 'SIGN_IN/SUBMIT_FORM/SUCCESSFULL_SUBMIT':
      return initialState;
    case 'SIGN_IN/SUBMIT_FORM/FAILED_SUBMIT':
      return state.setIn(['errors'], action.payload);
    default:
      return state;
  }
};

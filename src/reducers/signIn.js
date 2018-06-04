import Immutable from 'seamless-immutable';

const initialState = Immutable({
  username: '',
  password: '',
  errors: {},
  isFetching: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN/CHANGE_USERNAME':
      return state.setIn(['username'], action.payload).setIn(['errors', 'username'], '');
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

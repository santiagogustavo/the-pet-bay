import Immutable from 'seamless-immutable';

const initialState = Immutable({
  name: '',
  email: '',
  passwordNew: '',
  errors: {},
  isFetching: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_ACCOUNT/POPULATE_DATA':
      return state.merge(action.payload);
    case 'EDIT_ACCOUNT/CHANGE_NAME':
      return state.setIn(['name'], action.payload).setIn(['errors', 'name'], '');
    case 'EDIT_ACCOUNT/CHANGE_EMAIL':
      return state.setIn(['email'], action.payload).setIn(['errors', 'email'], '');
    case 'EDIT_ACCOUNT/CHANGE_PASSWORD_NEW':
      return state.setIn(['passwordNew'], action.payload).setIn(['errors', 'passwordNew'], '');
    case 'EDIT_ACCOUNT/TOGGLE_FETCH':
      return state.setIn(['isFetching'], !state.isFetching);
    case 'EDIT_ACCOUNT/SUBMIT_FORM/SUCCESSFULL_SUBMIT':
      return initialState;
    case 'EDIT_ACCOUNT/SUBMIT_FORM/FAILED_SUBMIT':
      return state.setIn(['errors'], action.payload);
    default:
      return state;
  }
};

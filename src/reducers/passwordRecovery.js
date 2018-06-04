import Immutable from 'seamless-immutable';

const initialState = Immutable({
  email: '',
  errors: {},
  isFetching: false,
  success: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PASSWORD_RECOVERY/CHANGE_EMAIL':
      return state.setIn(['email'], action.payload).setIn(['errors', 'email'], '');
    case 'PASSWORD_RECOVERY/TOGGLE_FETCH':
      return state.setIn(['isFetching'], !state.isFetching);
    case 'PASSWORD_RECOVERY/SUBMIT_FORM/SUCCESSFULL_SUBMIT':
      return state.merge({ errors: {}, success: true });
    case 'PASSWORD_RECOVERY/SUBMIT_FORM/FAILED_SUBMIT':
      return state.setIn(['errors'], action.payload);
    default:
      return state;
  }
};

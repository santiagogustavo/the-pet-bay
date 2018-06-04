import messages from './messages';
import { signIn } from './user';

export const changeUsername = event => ({
  type: 'SIGN_IN/CHANGE_USERNAME',
  payload: event.target.value,
});

export const changePassword = event => ({
  type: 'SIGN_IN/CHANGE_PASSWORD',
  payload: event.target.value,
});

const validateForm = (username, password) => {
  const payload = {};
  if (username.length === 0) payload.username = messages.empty;
  if (password.length === 0) payload.password = messages.empty;
  return payload;
};

export const submitForm = (username, password, history) => (dispatch) => {
  const payload = validateForm(username, password);
  if (Object.keys(payload).length > 0) {
    return dispatch({
      type: 'SIGN_IN/SUBMIT_FORM/FAILED_SUBMIT',
      payload,
    });
  }
  dispatch({
    type: 'SIGN_IN/SUBMIT_FORM/SUCCESSFULL_SUBMIT',
  });
  return dispatch(signIn(username, password, history));
};

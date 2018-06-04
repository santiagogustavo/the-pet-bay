import axios from 'axios';
import messages from './messages';
import { signIn } from './user';
import { validateEmail } from './validations';

export const changeEmail = event => ({
  type: 'SIGN_IN/CHANGE_EMAIL',
  payload: event.target.value,
});

export const changePassword = event => ({
  type: 'SIGN_IN/CHANGE_PASSWORD',
  payload: event.target.value,
});

export const toggleFetch = () => ({
  type: 'SIGN_IN/TOGGLE_FETCH',
});

const validateForm = (email, password) => {
  const payload = {};
  if (email.length === 0) payload.email = messages.empty;
  if (!validateEmail(email)) payload.email = messages.invalid;
  if (password.length < 6) payload.password = messages.tooSmall;
  if (password.length === 0) payload.password = messages.empty;
  return payload;
};

export const submitForm = (email, password, history) => (dispatch) => {
  const payload = validateForm(email, password);
  if (Object.keys(payload).length > 0) {
    return dispatch({
      type: 'SIGN_IN/SUBMIT_FORM/FAILED_SUBMIT',
      payload,
    });
  }
  dispatch(toggleFetch());
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/users',
    params: { email, password },
  }).then((response) => {
    dispatch(toggleFetch());
    if (response.data[0] && response.data[0] !== {}) {
      dispatch(signIn(response.data[0]));
      dispatch({
        type: 'SIGN_IN/SUBMIT_FORM/SUCCESSFULL_SUBMIT',
      });
      history.push('/');
    } else {
      dispatch({
        type: 'SIGN_IN/SUBMIT_FORM/FAILED_SUBMIT',
        payload: { email: messages.notFound },
      });
    }
  }).catch((response) => {
    dispatch(toggleFetch());
    console.log(response);
  });
};

import axios from 'axios';
import messages from './messages';
import { validateEmail } from './validations';

export const changeEmail = event => ({
  type: 'PASSWORD_RECOVERY/CHANGE_EMAIL',
  payload: event.target.value,
});

export const toggleFetch = () => ({
  type: 'PASSWORD_RECOVERY/TOGGLE_FETCH',
});

const validateForm = (email) => {
  const payload = {};
  if (email.length === 0) payload.email = messages.empty;
  if (!validateEmail(email)) payload.email = messages.invalid;
  return payload;
};

export const submitForm = email => (dispatch) => {
  const payload = validateForm(email);
  if (Object.keys(payload).length > 0) {
    return dispatch({
      type: 'PASSWORD_RECOVERY/SUBMIT_FORM/FAILED_SUBMIT',
      payload,
    });
  }
  dispatch(toggleFetch());
  return axios({
    method: 'POST',
    url: 'http://localhost:4000/password-recovery',
    data: { email },
  }).then(() => {
    dispatch(toggleFetch());
    dispatch({
      type: 'PASSWORD_RECOVERY/SUBMIT_FORM/SUCCESSFULL_SUBMIT',
    });
  }).catch((response) => {
    console.log(response);
    dispatch(toggleFetch());
    dispatch({
      type: 'PASSWORD_RECOVERY/SUBMIT_FORM/FAILED_SUBMIT',
      payload: { email: 'Email incorreto ou conta inexistente' },
    });
  });
};

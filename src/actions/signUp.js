import axios from 'axios';
import messages from './messages';
import { signIn } from './user';
import { validateEmail } from './validations';

export const changeName = event => ({
  type: 'SIGN_UP/CHANGE_NAME',
  payload: event.target.value,
});

export const changeEmail = event => ({
  type: 'SIGN_UP/CHANGE_EMAIL',
  payload: event.target.value,
});

export const changeImage = acceptedFiles => (dispatch) => {
  const file = acceptedFiles.find(f => f);
  const image = new Image();

  image.onload = () => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      dispatch({
        type: 'SIGN_UP/CHANGE_IMAGE/SUCCESSFULL_SUBMIT',
        payload: reader.result,
      });
    };
  };

  image.src = file.preview;

  return { type: 'SIGN_UP/CHANGE_IMAGE' };
};

export const changePassword = event => ({
  type: 'SIGN_UP/CHANGE_PASSWORD',
  payload: event.target.value,
});

export const changePasswordConfirmation = event => ({
  type: 'SIGN_UP/CHANGE_PASSWORD_CONFIRMATION',
  payload: event.target.value,
});

export const toggleFetch = () => ({
  type: 'SIGN_UP/TOGGLE_FETCH',
});

const validateForm = (name, email, password, passwordConfirmation) => {
  const payload = {};
  if (name.length === 0) payload.name = messages.empty;
  if (email.length === 0) payload.email = messages.empty;
  if (!validateEmail(email)) payload.email = messages.invalid;
  if (password !== passwordConfirmation) payload.password = messages.notMatching;
  if (password.length < 6) payload.password = messages.tooSmall;
  if (password.length === 0) payload.password = messages.empty;
  if (passwordConfirmation.length === 0) payload.passwordConfirmation = messages.empty;
  return payload;
};

export const submitForm = (
  name,
  email,
  image,
  password,
  passwordConfirmation,
  history,
) => (dispatch) => {
  const payload = validateForm(name, email, password, passwordConfirmation);
  if (Object.keys(payload).length > 0) {
    return dispatch({
      type: 'SIGN_UP/SUBMIT_FORM/FAILED_SUBMIT',
      payload,
    });
  }
  dispatch(toggleFetch());
  return axios({
    method: 'POST',
    url: 'http://localhost:4000/users',
    data: {
      name, email, image, password,
    },
  }).then((response) => {
    dispatch(toggleFetch());
    dispatch(signIn(response.data));
    dispatch({
      type: 'SIGN_UP/SUBMIT_FORM/SUCCESSFULL_SUBMIT',
    });
    history.push('/');
  }).catch((response) => {
    dispatch(toggleFetch());
    history.push('/500');
    console.log(response);
  });
};

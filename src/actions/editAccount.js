import axios from 'axios';
import messages from './messages';
import { signIn, signOut } from './user';
import { validateEmail } from './validations';

export const populateData = user => ({
  type: 'EDIT_ACCOUNT/POPULATE_DATA',
  payload: user,
});

export const changeImage = acceptedFiles => (dispatch) => {
  const file = acceptedFiles.find(f => f);
  const image = new Image();

  image.onload = () => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      dispatch({
        type: 'EDIT_ACCOUNT/CHANGE_IMAGE/SUCCESSFULL_SUBMIT',
        payload: reader.result,
      });
    };
  };

  image.src = file.preview;

  return { type: 'EDIT_ACCOUNT/CHANGE_IMAGE' };
};

export const changeName = event => ({
  type: 'EDIT_ACCOUNT/CHANGE_NAME',
  payload: event.target.value,
});

export const changeEmail = event => ({
  type: 'EDIT_ACCOUNT/CHANGE_EMAIL',
  payload: event.target.value,
});

export const changePasswordNew = event => ({
  type: 'EDIT_ACCOUNT/CHANGE_PASSWORD_NEW',
  payload: event.target.value,
});

export const toggleFetch = () => ({
  type: 'EDIT_ACCOUNT/TOGGLE_FETCH',
});

const validateForm = (name, email, passwordNew) => {
  const payload = {};
  if (name.length === 0) payload.name = messages.empty;
  if (email.length === 0) payload.email = messages.empty;
  if (!validateEmail(email)) payload.email = messages.invalid;
  if (passwordNew) {
    if (passwordNew.length < 6) payload.passwordNew = messages.tooSmall;
  }
  return payload;
};

export const submitForm = (
  id,
  image,
  name,
  email,
  passwordNew,
  history,
) => (dispatch) => {
  const payload = validateForm(name, email, passwordNew);
  if (Object.keys(payload).length > 0) {
    return dispatch({
      type: 'EDIT_ACCOUNT/SUBMIT_FORM/FAILED_SUBMIT',
      payload,
    });
  }
  dispatch(toggleFetch());
  return axios({
    method: 'PATCH',
    url: `http://localhost:4000/users/${id}`,
    data: {
      image,
      name,
      email,
      password: passwordNew.length > 0 ? passwordNew : undefined,
    },
  }).then((response) => {
    dispatch(toggleFetch());
    dispatch(signIn(response.data));
    dispatch({
      type: 'EDIT_ACCOUNT/SUBMIT_FORM/SUCCESSFULL_SUBMIT',
    });
    history.goBack();
  }).catch((response) => {
    dispatch(toggleFetch());
    console.log(response);
    history.push('/500');
  });
};

export const deletePet = (pet, history) => dispatch =>
  axios({
    method: 'DELETE',
    url: `http://localhost:4000/pets/${pet}`,
  }).then(() => {
    dispatch({
      type: 'MY_ACCOUNT/DELETE_PET/SUCCESS',
    });
  }).catch((response) => {
    console.log(response);
    history.push('/500');
  });

export const deletePets = (pets, history) => (dispatch) => {
  pets.forEach(pet => dispatch(deletePet(pet.id, history)));
  return ({
    type: 'MY_ACCOUNT/DELETE_PETS',
  });
};

export const deleteEvent = (event, history) => dispatch =>
  axios({
    method: 'DELETE',
    url: `http://localhost:4000/bookings/${event}`,
  }).then(() => {
    dispatch({
      type: 'MY_ACCOUNT/DELETE_EVENT/SUCCESS',
    });
  }).catch((response) => {
    console.log(response);
    history.push('/500');
  });

export const deleteAgenda = (agenda, history) => (dispatch) => {
  agenda.forEach(event => dispatch(deleteEvent(event.id, history)));
  return ({
    type: 'MY_ACCOUNT/DELETE_AGENDA',
  });
};

export const deleteAccount = (id, pets, agenda, history) => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'DELETE',
    url: `http://localhost:4000/users/${id}`,
  }).then(() => {
    dispatch(toggleFetch());
    dispatch({
      type: 'MY_ACCOUNT/DELETE/SUCCESS',
    });
    dispatch(deletePets(pets, history));
    dispatch(deleteAgenda(agenda, history));
    dispatch(signOut());
    history.push('/');
  }).catch(() => {
    dispatch(toggleFetch());
    history.push('/500');
  });
};

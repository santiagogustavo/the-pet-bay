import axios from 'axios';
import messages from './messages';

export const changeName = event => ({
  type: 'EDIT_PET/CHANGE_NAME',
  payload: event.target.value,
});

export const changeSpecies = event => ({
  type: 'EDIT_PET/CHANGE_SPECIES',
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
        type: 'EDIT_PET/CHANGE_IMAGE/SUCCESSFULL_SUBMIT',
        payload: reader.result,
      });
    };
  };

  image.src = file.preview;

  return { type: 'EDIT_PET/CHANGE_IMAGE' };
};

export const toggleFetch = () => ({
  type: 'EDIT_PET/TOGGLE_FETCH',
});

const validateForm = (name, species) => {
  const payload = {};
  if (name.length === 0) payload.name = messages.empty;
  if (species.length === 0) payload.species = messages.empty;
  return payload;
};

export const submitForm = (id, name, species, image, history) => (dispatch) => {
  const payload = validateForm(name, species);
  if (Object.keys(payload).length > 0) {
    return dispatch({
      type: 'EDIT_PET/SUBMIT_FORM/FAILED_SUBMIT',
      payload,
    });
  }
  dispatch(toggleFetch());
  return axios({
    method: 'PATCH',
    url: `http://localhost:4000/pets/${id}`,
    data: {
      name, species, image,
    },
  }).then(() => {
    dispatch(toggleFetch());
    dispatch({
      type: 'EDIT_PET/SUBMIT_FORM/SUCCESSFULL_SUBMIT',
    });
    history.goBack();
  }).catch((response) => {
    dispatch(toggleFetch());
    console.log(response);
    history.push('/500');
  });
};

export const fetch = (user, id, history) => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/pets',
    params: { user, id },
  }).then((response) => {
    dispatch(toggleFetch());
    if (response.data.length !== 0) {
      dispatch({
        type: 'EDIT_PET/FETCH/SUCCESS',
        payload: response.data[0],
      });
    } else {
      history.goBack();
    }
  }).catch(() => {
    dispatch(toggleFetch());
    history.push('/500');
  });
};

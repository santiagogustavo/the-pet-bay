import axios from 'axios';
import messages from './messages';

export const changeName = event => ({
  type: 'NEW_PET/CHANGE_NAME',
  payload: event.target.value,
});

export const changeSpecies = event => ({
  type: 'NEW_PET/CHANGE_SPECIES',
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
        type: 'NEW_PET/CHANGE_IMAGE/SUCCESSFULL_SUBMIT',
        payload: reader.result,
      });
    };
  };

  image.src = file.preview;

  return { type: 'NEW_PET/CHANGE_IMAGE' };
};

export const toggleFetch = () => ({
  type: 'NEW_PET/TOGGLE_FETCH',
});

const validateForm = (name, species) => {
  const payload = {};
  if (name.length === 0) payload.name = messages.empty;
  if (species.length === 0) payload.species = messages.empty;
  return payload;
};

export const submitForm = (user, name, species, image, history) => (dispatch) => {
  const payload = validateForm(name, species);
  if (Object.keys(payload).length > 0) {
    return dispatch({
      type: 'NEW_PET/SUBMIT_FORM/FAILED_SUBMIT',
      payload,
    });
  }
  dispatch(toggleFetch());
  return axios({
    method: 'POST',
    url: 'http://localhost:4000/pets',
    data: {
      user, name, species, image,
    },
  }).then(() => {
    dispatch(toggleFetch());
    dispatch({
      type: 'NEW_PET/SUBMIT_FORM/SUCCESSFULL_SUBMIT',
    });
    history.push('/my-pets');
  }).catch((response) => {
    dispatch(toggleFetch());
    console.log(response);
    history.push('/500');
  });
};

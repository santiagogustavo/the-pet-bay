import axios from 'axios';

export const toggleFetch = () => ({
  type: 'MY_PETS/TOGGLE_FETCH',
});

export const fetch = (user, history) => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/pets',
    params: { user },
  }).then((response) => {
    dispatch(toggleFetch());
    dispatch({
      type: 'MY_PETS/FETCH/SUCCESS',
      payload: { pets: response.data },
    });
  }).catch(() => {
    dispatch(toggleFetch());
    history.push('/500');
  });
};

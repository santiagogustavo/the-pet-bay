import axios from 'axios';

export const toggleFetch = () => ({
  type: 'SERVICES/TOGGLE_FETCH',
});

export const fetch = history => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/services',
  }).then((response) => {
    dispatch(toggleFetch());
    dispatch({
      type: 'SERVICES/FETCH/SUCCESS',
      payload: { services: response.data },
    });
  }).catch(() => {
    dispatch(toggleFetch());
    history.push('/500');
  });
};

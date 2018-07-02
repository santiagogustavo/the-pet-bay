import axios from 'axios';

export const toggleFetch = () => ({
  type: 'SERVICE/TOGGLE_FETCH',
});

export const fetch = (id, history) => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/services',
    params: { id },
  }).then((response) => {
    dispatch(toggleFetch());
    dispatch({
      type: 'SERVICE/FETCH/SUCCESS',
      payload: response.data[0],
    });
  }).catch(() => {
    dispatch(toggleFetch());
    history.push('/404');
  });
};

import axios from 'axios';

export const changeCount = event => ({
  type: 'PRODUCT/CHANGE_COUNT',
  payload: Number(event.target.value),
});

export const toggleFetch = () => ({
  type: 'PRODUCT/TOGGLE_FETCH',
});

export const fetch = (id, history) => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/products',
    params: { id },
  }).then((response) => {
    dispatch(toggleFetch());
    dispatch({
      type: 'PRODUCT/FETCH/SUCCESS',
      payload: response.data[0],
    });
  }).catch(() => {
    dispatch(toggleFetch());
    history.push('/404');
  });
};

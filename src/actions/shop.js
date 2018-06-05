import axios from 'axios';

export const toggleFetch = () => ({
  type: 'SHOP/TOGGLE_FETCH',
});

export const fetch = history => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/products',
  }).then((response) => {
    dispatch(toggleFetch());
    dispatch({
      type: 'SHOP/FETCH/SUCCESS',
      payload: { products: response.data },
    });
  }).catch(() => {
    dispatch(toggleFetch());
    history.push('/500');
  });
};

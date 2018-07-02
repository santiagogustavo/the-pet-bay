import axios from 'axios';

export const toggleFetchPromotions = () => ({
  type: 'LANDING_PAGE/PROMOTIONS/TOGGLE_FETCH',
});

export const toggleFetchProducts = index => ({
  type: 'LANDING_PAGE/PROMOTIONS/PRODUCTS/TOGGLE_FETCH',
  index,
});

export const fetchProduct = (product, index, history) => (dispatch) => {
  dispatch(toggleFetchProducts(index));
  return axios({
    method: 'GET',
    url: `http://localhost:4000/products/${product}`,
  }).then((response) => {
    dispatch(toggleFetchProducts(index));
    dispatch({
      type: 'LANDING_PAGE/PROMOTIONS/PRODUCTS/FETCH/SUCCESS',
      payload: response.data,
      index,
    });
  }).catch(() => {
    dispatch(toggleFetchProducts(index));
    history.push('/500');
  });
};

export const fetchProducts = (products, history) => (dispatch) => {
  products.forEach(product => dispatch(fetchProduct(product.id, products.indexOf(product), history)));
  return {
    type: 'LANDING_PAGE/PROMOTIONS/FETCH_PRODUCTS',
  };
};

export const fetchPromotions = history => (dispatch) => {
  dispatch(toggleFetchPromotions());
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/promotions',
  }).then((response) => {
    dispatch(toggleFetchPromotions());
    dispatch({
      type: 'LANDING_PAGE/PROMOTIONS/FETCH/SUCCESS',
      payload: response.data,
    });
    dispatch(fetchProducts(response.data.products));
  }).catch(() => {
    dispatch(toggleFetchPromotions());
    history.push('/500');
  });
};

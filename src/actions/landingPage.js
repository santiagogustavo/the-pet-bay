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
    dispatch(fetchProducts(response.data.products, history));
  }).catch(() => {
    dispatch(toggleFetchPromotions());
    history.push('/500');
  });
};

export const toggleFetchServices = () => ({
  type: 'LANDING_PAGE/SERVICES/TOGGLE_FETCH',
});

export const toggleFetchService = index => ({
  type: 'LANDING_PAGE/SERVICES/SERVICE/TOGGLE_FETCH',
  index,
});

export const fetchService = (service, index, history) => (dispatch) => {
  dispatch(toggleFetchService(index));
  return axios({
    method: 'GET',
    url: `http://localhost:4000/services/${service}`,
  }).then((response) => {
    dispatch(toggleFetchService(index));
    dispatch({
      type: 'LANDING_PAGE/SERVICES/SERVICE/FETCH/SUCCESS',
      payload: response.data,
      index,
    });
  }).catch(() => {
    dispatch(toggleFetchService(index));
    history.push('/500');
  });
};

export const fetchServicesList = (services, history) => (dispatch) => {
  services.forEach(service => dispatch(fetchService(service.id, services.indexOf(service), history)));
  return {
    type: 'LANDING_PAGE/SERVICES/FETCH_SERVICES',
  };
};

export const fetchServices = history => (dispatch) => {
  dispatch(toggleFetchServices());
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/servicesLanding',
  }).then((response) => {
    dispatch(toggleFetchServices());
    dispatch({
      type: 'LANDING_PAGE/SERVICES/FETCH/SUCCESS',
      payload: response.data,
    });
    dispatch(fetchServicesList(response.data, history));
  }).catch(() => {
    dispatch(toggleFetchServices());
    history.push('/500');
  });
};

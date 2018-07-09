import axios from 'axios';

export const addItem = (product, history) => dispatch =>
  axios({
    method: 'PATCH',
    url: `http://localhost:4000/products/${product.id}`,
    data: { quantity: product.quantity - product.count },
  }).then(() => {
    dispatch({
      type: 'SHOPPING_CART/ADD_ITEM',
      payload: product,
    });
    history.push('/shopping-cart');
  });

export const toggleDelete = () => ({
  type: 'SHOPPING_CART/TOGGLE_DELETE',
});

export const removeItem = (product, index, history) => (dispatch) => {
  dispatch(toggleDelete());
  return axios({
    method: 'PATCH',
    url: `http://localhost:4000/products/${product.id}`,
    data: { quantity: product.quantity },
  }).then(() => {
    dispatch(toggleDelete());
    dispatch({
      type: 'SHOPPING_CART/REMOVE_ITEM',
      payload: index,
    });
  }).catch(() => {
    dispatch(toggleDelete());
    history.push('/500');
  });
};

export const toggleFetch = () => ({
  type: 'SHOPPING_CART/TOGGLE_FETCH',
});

export const closeBill = (user, items) => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'POST',
    url: 'http://localhost:4000/bills',
    data: { user, items },
  }).then(() => {
    dispatch(toggleFetch());
    dispatch({ type: 'SHOPPING_CART/CLOSE_BILL/SUCCESS' });
  }).catch((error) => {
    console.log(error);
    dispatch(toggleFetch());
    dispatch({ type: 'SHOPPING_CART/CLOSE_BILL/FAILURE' });
  });
};

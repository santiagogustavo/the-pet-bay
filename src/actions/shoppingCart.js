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

export const removeItem = (product, index) => dispatch =>
  axios({
    method: 'PATCH',
    url: `http://localhost:4000/products/${product.id}`,
    data: { quantity: product.quantity },
  }).then(() => {
    dispatch({
      type: 'SHOPPING_CART/REMOVE_ITEM',
      payload: index,
    });
  });

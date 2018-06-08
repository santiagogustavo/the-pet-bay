export const addItem = product => ({
  type: 'SHOPPING_CART/ADD_ITEM',
  payload: product,
});

export const removeItem = index => ({
  type: 'SHOPPING_CART/REMOVE_ITEM',
  payload: index,
});

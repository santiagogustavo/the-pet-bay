import Immutable from 'seamless-immutable';

const initialState = Immutable({
  items: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOPPING_CART/ADD_ITEM':
      return state.merge({ items: state.items.concat(action.payload) });
    case 'SHOPPING_CART/REMOVE_ITEM':
      return state.merge({ items: state.items.without(action.payload) });
    default:
      return state;
  }
};

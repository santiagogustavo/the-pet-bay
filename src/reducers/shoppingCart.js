import Immutable from 'seamless-immutable';

const initialState = Immutable({
  items: [],
  closed: false,
  isFetching: false,
  isDeleting: false,
});

const checkOverlap = (state, action) =>
  state.items.findIndex(item => item.id === action.payload.id);

const getOverlap = (state, action) =>
  state.items.find(item => item.id === action.payload.id);

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOPPING_CART/ADD_ITEM':
      if (checkOverlap(state, action) === -1) {
        return state.merge({ items: state.items.concat(action.payload), closed: false });
      }
      return state.setIn(
        ['items', checkOverlap(state, action), 'count'],
        getOverlap(state, action).count + action.payload.count,
      );
    case 'SHOPPING_CART/REMOVE_ITEM':
      return state.merge({
        items: state.items.slice(0, action.payload)
          .concat(state.items.slice(action.payload + 1, state.items.length)),
      });
    case 'SHOPPING_CART/TOGGLE_FETCH':
      return state.merge({ isFetching: !state.isFetching });
    case 'SHOPPING_CART/TOGGLE_DELETE':
      return state.merge({ isDeleting: !state.isDeleting });
    case 'SHOPPING_CART/CLOSE_BILL/SUCCESS':
      return initialState.merge({ closed: true });
    default:
      return state;
  }
};

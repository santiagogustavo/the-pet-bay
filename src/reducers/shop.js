import Immutable from 'seamless-immutable';

const initialState = Immutable({
  products: [],
  isFetching: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOP/TOGGLE_FETCH':
      return state.setIn(['isFetching'], !state.isFetching);
    case 'SHOP/FETCH/SUCCESS':
      return state.merge(action.payload);
    default:
      return state;
  }
};

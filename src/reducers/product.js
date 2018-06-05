import Immutable from 'seamless-immutable';

const initialState = Immutable({
  id: -1,
  name: '',
  description: '',
  price: -1,
  quantity: -1,
  isFetching: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT/TOGGLE_FETCH':
      return state.setIn(['isFetching'], !state.isFetching);
    case 'PRODUCT/FETCH/SUCCESS':
      return state.merge(action.payload);
    default:
      return state;
  }
};

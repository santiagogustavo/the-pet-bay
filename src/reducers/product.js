import Immutable from 'seamless-immutable';

const initialState = Immutable({
  id: -1,
  name: '',
  description: '',
  price: -1,
  quantity: -1,
  count: 0,
  isFetching: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT/CHANGE_COUNT':
      return state.setIn(['count'], action.payload);
    case 'PRODUCT/TOGGLE_FETCH':
      return state.setIn(['isFetching'], !state.isFetching);
    case 'PRODUCT/FETCH/SUCCESS':
      return state.merge({ ...action.payload, count: 0 });
    default:
      return state;
  }
};

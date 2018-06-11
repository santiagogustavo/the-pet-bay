import Immutable from 'seamless-immutable';

const initialState = Immutable({
  pets: [],
  isFetching: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MY_PETS/TOGGLE_FETCH':
      return state.setIn(['isFetching'], !state.isFetching);
    case 'MY_PETS/FETCH/SUCCESS':
      return state.merge(action.payload);
    default:
      return state;
  }
};

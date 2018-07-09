import Immutable from 'seamless-immutable';

const initialState = Immutable({
  services: [],
  isFetching: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SERVICES/TOGGLE_FETCH':
      return state.setIn(['isFetching'], !state.isFetching);
    case 'SERVICES/FETCH/SUCCESS':
      return state.merge(action.payload);
    default:
      return state;
  }
};

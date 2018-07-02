import Immutable from 'seamless-immutable';

const initialState = Immutable({
  agenda: [],
  isFetching: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MY_AGENDA/TOGGLE_FETCH':
      return state.setIn(['isFetching'], !state.isFetching);
    case 'MY_AGENDA/FETCH/SUCCESS':
      return state.merge(action.payload);
    default:
      return state;
  }
};

import Immutable from 'seamless-immutable';

const initialState = Immutable({
  id: -1,
  name: '',
  short: '',
  long: '',
  image: '',
  isFetching: false,
  isPosting: false,
  success: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SERVICE/TOGGLE_FETCH':
      return state.setIn(['isFetching'], !state.isFetching);
    case 'SERVICE/FETCH/SUCCESS':
      return state.merge({ ...action.payload });
    case 'SERVICE/TOGGLE_POST':
      return state.setIn(['isPosting'], !state.isPosting);
    case 'SERVICE/POST_BOOKING/SUCCESS':
      return state.setIn(['success'], true);
    default:
      return state;
  }
};

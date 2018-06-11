import Immutable from 'seamless-immutable';

const initialState = Immutable({
  id: -1,
  name: '',
  species: '',
  agenda: [],
  isFetching: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PET/TOGGLE_FETCH':
      return state.setIn(['isFetching'], !state.isFetching);
    case 'PET/FETCH/SUCCESS':
      return state.merge({ ...action.payload, count: 0 });
    case 'PET/DELETE_BOOKING/SUCCESS':
      return state.merge({
        agenda: state.agenda.slice(0, action.payload)
          .concat(state.agenda.slice(action.payload + 1, state.agenda.length)),
      });
    case 'PET/DELETE/SUCCESS':
      return initialState;
    default:
      return state;
  }
};

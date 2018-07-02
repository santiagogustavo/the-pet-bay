import Immutable from 'seamless-immutable';

const initialState = Immutable({
  name: '',
  species: '',
  image: '',
  errors: {},
  isFetching: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_PET/CHANGE_NAME':
      return state.setIn(['name'], action.payload).setIn(['errors', 'name'], '');
    case 'NEW_PET/CHANGE_SPECIES':
      return state.setIn(['species'], action.payload).setIn(['errors', 'species'], '');
    case 'NEW_PET/CHANGE_IMAGE/SUCCESSFULL_SUBMIT':
      return state.setIn(['image'], action.payload);
    case 'NEW_PET/TOGGLE_FETCH':
      return state.setIn(['isFetching'], !state.isFetching);
    case 'NEW_PET/SUBMIT_FORM/SUCCESSFULL_SUBMIT':
      return initialState;
    case 'NEW_PET/SUBMIT_FORM/FAILED_SUBMIT':
      return state.setIn(['errors'], action.payload);
    default:
      return state;
  }
};

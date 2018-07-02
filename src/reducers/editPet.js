import Immutable from 'seamless-immutable';

const initialState = Immutable({
  id: -1,
  name: '',
  species: '',
  image: '',
  errors: {},
  isFetching: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_PET/FETCH/SUCCESS':
      return state.merge(action.payload);
    case 'EDIT_PET/CHANGE_IMAGE/SUCCESSFULL_SUBMIT':
      return state.setIn(['image'], action.payload);
    case 'EDIT_PET/CHANGE_NAME':
      return state.setIn(['name'], action.payload).setIn(['errors', 'name'], '');
    case 'EDIT_PET/CHANGE_SPECIES':
      return state.setIn(['species'], action.payload).setIn(['errors', 'species'], '');
    case 'EDIT_PET/TOGGLE_FETCH':
      return state.setIn(['isFetching'], !state.isFetching);
    case 'EDIT_PET/SUBMIT_FORM/SUCCESSFULL_SUBMIT':
      return initialState;
    case 'EDIT_PET/SUBMIT_FORM/FAILED_SUBMIT':
      return state.setIn(['errors'], action.payload);
    default:
      return state;
  }
};

import Immutable from 'seamless-immutable';

const initialState = Immutable({
  name: '',
  race: '',
  type: '',
  size: '',
  notes: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PET/SUBMIT_FORM':
      return initialState;
    case 'PET/CHANGE_NAME':
      return state.setIn(['name'], action.payload);
    case 'PET/CHANGE_RACE':
      return state.setIn(['race'], action.payload);
    case 'PET/CHANGE_TYPE':
      return state.setIn(['type'], action.payload);
    case 'PET/CHANGE_SIZE':
      return state.setIn(['size'], action.payload);
    case 'PET/CHANGE_NOTES':
      return state.setIn(['notes'], action.payload);
    default:
      return state;
  }
};


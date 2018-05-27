import Immutable from 'seamless-immutable';

const initialState = Immutable({
  signed: false,
  name: '',
  id: -1,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER/SIGN_IN':
      return state.merge({ ...action.payload, signed: true });
    case 'USER/SIGN_OUT':
      return state.merge({ name: '', signed: false });
    default:
      return state;
  }
};

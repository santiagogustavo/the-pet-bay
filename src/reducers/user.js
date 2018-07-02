import Immutable from 'seamless-immutable';

const initialState = Immutable({
  id: -1,
  signed: false,
  name: '',
  email: '',
  image: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER/SIGN_IN':
      return state.merge({ ...action.payload, signed: true });
    case 'USER/SIGN_OUT':
      return initialState;
    default:
      return state;
  }
};

import Immutable from 'seamless-immutable';

const initialState = Immutable({
  signed: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER/SIGN_IN':
      return state.merge({ signed: true });
    case 'USER/SIGN_OUT':
      return state.merge({ signed: false });
    default:
      return state;
  }
};

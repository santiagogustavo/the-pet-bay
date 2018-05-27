import axios from 'axios';

export const signIn = () => dispatch =>
  axios({
    method: 'GET',
    url: 'http://localhost:4000/users/1',
  }).then((response) => {
    dispatch({
      type: 'USER/SIGN_IN',
      payload: response.data,
    });
  });

export const signOut = () => ({
  type: 'USER/SIGN_OUT',
});

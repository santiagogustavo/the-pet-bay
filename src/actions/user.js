import axios from 'axios';

export const signIn = (username, password, history) => dispatch =>
  axios({
    method: 'GET',
    url: 'http://localhost:4000/users/1',
    params: { username, password },
  }).then((response) => {
    dispatch({
      type: 'USER/SIGN_IN',
      payload: response.data,
    });
    history.push('/');
  });

export const signOut = () => ({
  type: 'USER/SIGN_OUT',
});

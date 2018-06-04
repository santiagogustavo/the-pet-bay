import axios from 'axios';
import { toggleFetch } from './signIn';

export const signIn = (username, password, history) => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/users/1',
    params: { username, password },
  }).then((response) => {
    dispatch(toggleFetch());
    dispatch({
      type: 'USER/SIGN_IN',
      payload: response.data,
    });
    dispatch({
      type: 'SIGN_IN/SUBMIT_FORM/SUCCESSFULL_SUBMIT',
    });
    history.push('/');
  });
};

export const signOut = () => ({
  type: 'USER/SIGN_OUT',
});

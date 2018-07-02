import axios from 'axios';

export const toggleFetch = () => ({
  type: 'MY_AGENDA/TOGGLE_FETCH',
});

export const fetch = (user, history) => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/bookings',
    params: { user },
  }).then((response) => {
    dispatch(toggleFetch());
    dispatch({
      type: 'MY_AGENDA/FETCH/SUCCESS',
      payload: { agenda: response.data },
    });
  }).catch(() => {
    dispatch(toggleFetch());
    history.push('/500');
  });
};

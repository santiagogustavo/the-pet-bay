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

export const deleteBooking = (event, history) => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'DELETE',
    url: `http://localhost:4000/bookings/${event}`,
  }).then(() => {
    dispatch(toggleFetch());
    dispatch({
      type: 'MY_AGENDA/DELETE_BOOKING/SUCCESS',
    });
    dispatch(fetch(event.user, history));
  }).catch((response) => {
    dispatch(toggleFetch());
    console.log(response);
    history.push('/500');
  });
};

import axios from 'axios';

export const toggleFetch = () => ({
  type: 'SERVICE/TOGGLE_FETCH',
});

export const togglePost = () => ({
  type: 'SERVICE/TOGGLE_POST',
});

export const clear = () => ({
  type: 'SERVICE/CLEAR',
});

export const fetch = (id, history) => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/services',
    params: { id },
  }).then((response) => {
    dispatch(toggleFetch());
    dispatch({
      type: 'SERVICE/FETCH/SUCCESS',
      payload: response.data[0],
    });
  }).catch(() => {
    dispatch(toggleFetch());
    history.push('/404');
  });
};

// export const postBooking = (user, pet, service, date, time, history)
export const postBooking = (booking, history) => (dispatch) => {
  dispatch(togglePost());
  return axios({
    method: 'POST',
    url: 'http://localhost:4000/bookings',
    data: booking,
  }).then(() => {
    dispatch(togglePost());
    dispatch({
      type: 'SERVICE/POST_BOOKING/SUCCESS',
    });
  }).catch(() => {
    dispatch(togglePost());
    history.push('/500');
  });
};

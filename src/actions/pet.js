import axios from 'axios';

export const toggleFetch = () => ({
  type: 'PET/TOGGLE_FETCH',
});

export const fetchAgenda = (user, id, history) => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/bookings',
    params: { user, pet: id },
  }).then((response) => {
    dispatch(toggleFetch());
    dispatch({
      type: 'PET/FETCH/SUCCESS',
      payload: { agenda: response.data },
    });
  }).catch(() => {
    dispatch(toggleFetch());
    history.push('/500');
  });
};

export const fetch = (user, id, history) => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/pets',
    params: { user, id },
  }).then((response) => {
    dispatch(toggleFetch());
    if (response.data.length !== 0) {
      dispatch({
        type: 'PET/FETCH/SUCCESS',
        payload: response.data[0],
      });
      dispatch(fetchAgenda(user, id, history));
    } else {
      history.goBack();
    }
  }).catch(() => {
    dispatch(toggleFetch());
    history.push('/500');
  });
};

export const deleteEvent = (event, index, history) => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'DELETE',
    url: `http://localhost:4000/bookings/${event}`,
  }).then(() => {
    dispatch(toggleFetch());
    dispatch({
      type: 'PET/DELETE_BOOKING/SUCCESS',
      payload: index,
    });
  }).catch((response) => {
    dispatch(toggleFetch());
    console.log(response);
    history.push('/500');
  });
};

export const deleteAgenda = (agenda, history) => (dispatch) => {
  agenda.forEach(event => dispatch(deleteEvent(event.id, history)));
  return ({
    type: 'PET/DELETE_AGENDA',
  });
};

export const deletePet = (id, agenda, history) => (dispatch) => {
  dispatch(toggleFetch());
  return axios({
    method: 'DELETE',
    url: `http://localhost:4000/pets/${id}`,
  }).then(() => {
    dispatch(toggleFetch());
    dispatch({
      type: 'PET/DELETE/SUCCESS',
    });
    dispatch(deleteAgenda(agenda, history));
    history.push('/my-pets');
  }).catch(() => {
    dispatch(toggleFetch());
    history.push('/500');
  });
};

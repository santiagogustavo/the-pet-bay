import { connect } from 'react-redux';

import { fetch as fetchAgenda, deleteBooking } from 'actions/myAgenda';
import { fetch as fetchPets } from 'actions/myPets';
import MyAgenda from './MyAgenda';

const mapStateToProps = state => ({
  agenda: state.myAgenda.agenda,
  pets: state.myPets.pets,
  isFetchingAgenda: state.myAgenda.isFetching,
  isFetchingPets: state.myPets.isFetching,
  id: state.user.id,
  signed: state.user.signed,
});

const mapDispatchToProps = {
  fetchAgenda, fetchPets, deleteBooking,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAgenda);

import { connect } from 'react-redux';

import { fetch, deleteEvent, deletePet } from '../../actions/pet';
import Pet from './Pet';

const mapStateToProps = state => ({
  name: state.pet.name,
  species: state.pet.species,
  errors: state.pet.errors,
  agenda: state.pet.agenda,
  isFetching: state.pet.isFetching,
  user: state.user.id,
  signed: state.user.signed,
});

const mapDispatchToProps = {
  fetch, deleteEvent, deletePet,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pet);

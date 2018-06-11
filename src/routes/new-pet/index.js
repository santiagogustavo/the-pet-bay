import { connect } from 'react-redux';

import { changeName, changeSpecies, submitForm } from 'actions/newPet';
import NewPet from './NewPet';

const mapStateToProps = state => ({
  user: state.user.id,
  signed: state.user.signed,
  name: state.newPet.name,
  species: state.newPet.species,
  errors: state.newPet.errors,
  isFetching: state.newPet.isFetching,
});

const mapDispatchToProps = {
  changeName, changeSpecies, submitForm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPet);

import { connect } from 'react-redux';

import {
  fetch,
  changeName,
  changeSpecies,
  changeImage,
  submitForm,
} from 'actions/editPet';
import EditPet from './EditPet';

const mapStateToProps = state => ({
  user: state.user.id,
  signed: state.user.signed,
  id: state.editPet.id,
  name: state.editPet.name,
  species: state.editPet.species,
  image: state.editPet.image,
  errors: state.editPet.errors,
  isFetching: state.editPet.isFetching,
});

const mapDispatchToProps = {
  fetch,
  changeName,
  changeSpecies,
  changeImage,
  submitForm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPet);

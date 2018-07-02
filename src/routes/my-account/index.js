import { connect } from 'react-redux';

import { fetch as fetchAgenda } from 'actions/myAgenda';
import { fetch as fetchPets } from 'actions/myPets';
import { deleteAccount } from 'actions/editAccount';
import MyAccount from './MyAccount';

const mapStateToProps = state => ({
  signed: state.user.signed,
  id: state.user.id,
  name: state.user.name,
  email: state.user.email,
  image: state.user.image,
  pets: state.myPets.pets,
  agenda: state.myAgenda.agenda,
  isFetching: state.editAccount.isFetching,
  isFetchingAgenda: state.myAgenda.isFetching,
  isFetchingPets: state.myPets.isFetching,
});

const mapDispatchToProps = {
  fetchAgenda, fetchPets, deleteAccount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAccount);

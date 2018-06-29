import { connect } from 'react-redux';

import { fetch as fetchPets } from 'actions/myPets';
import MyAccount from './MyAccount';

const mapStateToProps = state => ({
  signed: state.user.signed,
  id: state.user.id,
  name: state.user.name,
  email: state.user.email,
  pets: state.myPets.pets,
  isFetchingPets: state.myPets.isFetching,
});

const mapDispatchToProps = {
  fetchPets,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAccount);

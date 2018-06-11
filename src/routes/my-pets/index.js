import { connect } from 'react-redux';

import { fetch } from 'actions/myPets';
import MyPets from './MyPets';

const mapStateToProps = state => ({
  user: state.user.id,
  signed: state.user.signed,
  pets: state.myPets.pets,
  isFetching: state.myPets.isFetching,
});

const mapDispatchToProps = {
  fetch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPets);

import { connect } from 'react-redux';

import { fetch } from 'actions/service';
import { fetch as fetchPets } from 'actions/myPets';
import Service from './Service';

const mapStateToProps = state => ({
  id: state.service.id,
  name: state.service.name,
  short: state.service.short,
  long: state.service.long,
  image: state.service.image,
  pets: state.myPets.pets,
  isFetching: state.service.isFetching,
  isFetchingPets: state.myPets.isFetching,
  userId: state.user.id,
  signed: state.user.signed,
});

const mapDispatchToProps = {
  fetch, fetchPets,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Service);

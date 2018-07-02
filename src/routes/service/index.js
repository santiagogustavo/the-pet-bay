import { connect } from 'react-redux';

import { fetch } from 'actions/service';
import Service from './Service';

const mapStateToProps = state => ({
  id: state.service.id,
  name: state.service.name,
  short: state.service.short,
  long: state.service.long,
  image: state.service.image,
  isFetching: state.service.isFetching,
  signed: state.user.signed,
});

const mapDispatchToProps = {
  fetch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Service);

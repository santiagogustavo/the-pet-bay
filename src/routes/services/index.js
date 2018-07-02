import { connect } from 'react-redux';

import { fetch } from 'actions/services';
import Services from './Services';

const mapStateToProps = state => ({
  services: state.services.services,
  isFetching: state.services.isFetching,
});

const mapDispatchToProps = {
  fetch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Services);

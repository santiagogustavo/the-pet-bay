import { connect } from 'react-redux';

import Pet from './Pet';

const mapStateToProps = state => ({
  signed: state.user.signed,
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pet);

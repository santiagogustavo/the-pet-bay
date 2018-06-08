import { connect } from 'react-redux';

import MyAgenda from './MyAgenda';

const mapStateToProps = state => ({
  signed: state.user.signed,
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAgenda);

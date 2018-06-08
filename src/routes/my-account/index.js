import { connect } from 'react-redux';

import MyAccount from './MyAccount';

const mapStateToProps = state => ({
  signed: state.user.signed,
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAccount);

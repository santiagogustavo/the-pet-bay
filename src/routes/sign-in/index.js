import { connect } from 'react-redux';

import { changeUsername, changePassword, submitForm } from 'actions/signIn';
import SignIn from './SignIn';

const mapStateToProps = state => ({
  username: state.signIn.username,
  password: state.signIn.password,
  errors: state.signIn.errors,
});

const mapDispatchToProps = {
  changeUsername, changePassword, submitForm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

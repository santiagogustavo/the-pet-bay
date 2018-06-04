import { connect } from 'react-redux';

import { changeEmail, changePassword, submitForm } from 'actions/signIn';
import SignIn from './SignIn';

const mapStateToProps = state => ({
  email: state.signIn.email,
  password: state.signIn.password,
  errors: state.signIn.errors,
  isFetching: state.signIn.isFetching,
});

const mapDispatchToProps = {
  changeEmail, changePassword, submitForm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

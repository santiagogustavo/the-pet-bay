import { connect } from 'react-redux';

import {
  changeName,
  changeEmail,
  changePassword,
  changePasswordConfirmation,
  submitForm,
} from 'actions/signUp';
import SignUp from './SignUp';

const mapStateToProps = state => ({
  name: state.signUp.name,
  email: state.signUp.email,
  password: state.signUp.password,
  passwordConfirmation: state.signUp.passwordConfirmation,
  errors: state.signUp.errors,
  isFetching: state.signUp.isFetching,
});

const mapDispatchToProps = {
  changeName,
  changeEmail,
  changePassword,
  changePasswordConfirmation,
  submitForm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

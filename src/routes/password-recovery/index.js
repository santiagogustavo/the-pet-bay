import { connect } from 'react-redux';

import { changeEmail, submitForm } from 'actions/passwordRecovery';
import PasswordRecovery from './PasswordRecovery';

const mapStateToProps = state => ({
  email: state.passwordRecovery.email,
  errors: state.passwordRecovery.errors,
  isFetching: state.passwordRecovery.isFetching,
  success: state.passwordRecovery.success,
});

const mapDispatchToProps = {
  changeEmail, submitForm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordRecovery);

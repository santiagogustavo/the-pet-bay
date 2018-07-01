import { connect } from 'react-redux';

import {
  populateData,
  changeImage,
  changeName,
  changeEmail,
  changePasswordOld,
  changePasswordNew,
  submitForm,
} from 'actions/editAccount';
import EditAccount from './EditAccount';

const mapStateToProps = state => ({
  id: state.user.id,
  userName: state.user.name,
  userEmail: state.user.email,
  userImage: state.user.image,
  signed: state.user.signed,
  image: state.editAccount.image,
  name: state.editAccount.name,
  email: state.editAccount.email,
  passwordOld: state.editAccount.passwordOld,
  passwordNew: state.editAccount.passwordNew,
  errors: state.editAccount.errors,
  isFetching: state.editAccount.isFetching,
});

const mapDispatchToProps = {
  populateData,
  changeImage,
  changeName,
  changeEmail,
  changePasswordOld,
  changePasswordNew,
  submitForm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditAccount);

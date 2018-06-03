import { connect } from 'react-redux';
import { signIn, signOut } from 'actions/user';
import UserDropdown from './UserSidebar';

const mapStateToProps = state => ({
  signed: state.user.signed,
});

const mapDispatchToProps = {
  signIn, signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDropdown);

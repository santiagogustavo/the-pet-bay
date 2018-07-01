import { connect } from 'react-redux';
import { signOut } from 'actions/user';
import UserDropdown from './UserDropdown';

const mapStateToProps = state => ({
  signed: state.user.signed,
  image: state.user.image,
});

const mapDispatchToProps = {
  signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDropdown);

import { connect } from 'react-redux';
import UserNotifications from './UserNotifications';

const mapStateToProps = state => ({
  notifications: state.notifications,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserNotifications);

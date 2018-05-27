import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = state => ({
  signed: state.user.signed,
  name: state.user.name,
});

export default connect(
  mapStateToProps,
  null,
)(Navbar);

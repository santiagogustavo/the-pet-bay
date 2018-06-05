import { connect } from 'react-redux';
import LandingArea from './LandingArea';

const mapStateToProps = state => ({
  signed: state.user.signed,
});

export default connect(
  mapStateToProps,
  null,
)(LandingArea);

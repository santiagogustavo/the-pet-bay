import { connect } from 'react-redux';
import LandingBlocks from './LandingBlocks';

const mapStateToProps = state => ({
  signed: state.user.signed,
});

export default connect(
  mapStateToProps,
  null,
)(LandingBlocks);

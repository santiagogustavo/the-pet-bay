import { connect } from 'react-redux';

import MyPets from './MyPets';

const mapStateToProps = state => ({
  signed: state.user.signed,
});

export default connect(
  mapStateToProps,
  null,
)(MyPets);

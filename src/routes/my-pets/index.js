import { connect } from 'react-redux';

import MyPets from './MyPets';

const mapStateToProps = state => ({
  signed: state.user.signed,
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPets);

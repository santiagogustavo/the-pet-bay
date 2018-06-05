import { connect } from 'react-redux';

import MyPets from './MyPets';

const mapStateToProps = state => ({
  signed: state.user.signed,
  notes: state.pets.notes,
  race: state.pets.race,
  type: state.pets.type,
  size: state.pets.size,
  name: state.pets.name,
});

export default connect(
  mapStateToProps,
  null,
)(MyPets);

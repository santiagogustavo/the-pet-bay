import { connect } from 'react-redux';

import ShoppingCart from './ShoppingCart';

const mapStateToProps = state => ({
  signed: state.user.signed,
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCart);

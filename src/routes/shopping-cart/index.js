import { connect } from 'react-redux';

import { removeItem } from 'actions/shoppingCart';
import ShoppingCart from './ShoppingCart';

const mapStateToProps = state => ({
  items: state.shoppingCart.items,
  signed: state.user.signed,
});

const mapDispatchToProps = {
  removeItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCart);

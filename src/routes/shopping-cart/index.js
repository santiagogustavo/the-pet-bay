import { connect } from 'react-redux';

import { clear, closeBill, removeItem } from 'actions/shoppingCart';
import ShoppingCart from './ShoppingCart';

const mapStateToProps = state => ({
  items: state.shoppingCart.items,
  closed: state.shoppingCart.closed,
  isFetching: state.shoppingCart.isFetching,
  isDeleting: state.shoppingCart.isDeleting,
  user: state.user.id,
  signed: state.user.signed,
});

const mapDispatchToProps = {
  clear, closeBill, removeItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCart);

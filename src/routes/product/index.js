import { connect } from 'react-redux';

import { changeCount, fetch } from 'actions/product';
import { addItem } from 'actions/shoppingCart';
import Product from './Product';

const mapStateToProps = state => ({
  id: state.product.id,
  name: state.product.name,
  description: state.product.description,
  image: state.product.image,
  price: state.product.price,
  quantity: state.product.quantity,
  count: state.product.count,
  isFetching: state.product.isFetching,
  signed: state.user.signed,
});

const mapDispatchToProps = {
  addItem, changeCount, fetch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);

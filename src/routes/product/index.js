import { connect } from 'react-redux';

import { fetch } from 'actions/product';
import Product from './Product';

const mapStateToProps = state => ({
  id: state.product.id,
  name: state.product.name,
  description: state.product.description,
  quantity: state.product.quantity,
  isFetching: state.product.isFetching,
});

const mapDispatchToProps = {
  fetch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);

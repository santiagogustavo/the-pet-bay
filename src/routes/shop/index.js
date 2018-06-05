import { connect } from 'react-redux';

import { fetch } from 'actions/shop';
import Shop from './Shop';

const mapStateToProps = state => ({
  products: state.shop.products,
  isFetching: state.shop.isFetching,
});

const mapDispatchToProps = {
  fetch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shop);

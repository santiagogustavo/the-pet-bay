import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';

import StyledH1, { Centralized } from './styles';
import { Content, Page } from '../../components/styles';

class Product extends React.Component {
  componentWillMount = () =>
    this.props.fetch(this.props.match.params.id, this.props.history);
  render = () => (
    <Page>
      <Navbar />
      <Content>
        {
          this.props.isFetching ?
            <Centralized>
              <Loader />
            </Centralized>
          :
            <div>
              <StyledH1>
                {this.props.id}
                {this.props.name}
              </StyledH1>
              {this.props.description}
              {this.props.quantity}
            </div>
        }
      </Content>
      <Footer />
    </Page>
  )
}

Product.propTypes = {
  description: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  id: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Product;

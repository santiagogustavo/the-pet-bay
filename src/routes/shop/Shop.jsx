import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Placeholder from 'assets/imgs/placeholder.jpg';

import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import Promotion from 'components/Promotion';
import SeparatorTitle from 'components/SeparatorTitle';
import { randomColor } from 'components/Utils/colors';
import { Centralized, Content, Page, PromotionsContainer } from 'components/styles';

class Shop extends React.Component {
  componentWillMount = () =>
    this.props.fetch(this.props.history);

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
              <SeparatorTitle label="Loja" />
              <PromotionsContainer>
                {this.props.products.map(item => (
                  <div key={_.uniqueId(item.id)}>
                    <Promotion
                      label={item.name}
                      text={`Disponíveis: ${item.quantity}`}
                      priceTag={`R$ ${item.price}`}
                      color={randomColor()}
                      to={`/shop/${item.id}`}
                      image={Placeholder}
                    />
                  </div>
                ))}
              </PromotionsContainer>
            </div>
        }
      </Content>
      <Footer />
    </Page>
  );
}

Shop.propTypes = {
  fetch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  })).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Shop;
